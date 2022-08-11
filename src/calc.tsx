
enum RelativeWohnlage {
    AmEck = "AmEck"
    Innenliegend = "Innenliegend"
    Freistehend = "Freistehend"
}

enum Lage {
    DG = "DG"
    EG = "EG"
    Zwischengeschoss = "Zwischengeschoss"
    DG_EG = "DG+EG"
}

enum Bausubstanz {
    Altbau = "Altbau"
    AltbauSaniert = "AltbauSaniert"
    Neubau = "Neubau"
}

enum Heizungsart {
    Gas = "Gas"
    Strom = "Strom"
    Pellets = "Pellets"
    Fernwaerme = "Fernwaerme"
}



interface WindowConfiguration {
    areaPerWindow: number // non-negative
    NumberOfWindows: number // non-negative
}



enum ComponentWithUValue {
    Wall = "Wall"
    Window = "Window"
    Floor = "Floor"
    Roof = "Roof"
}



interface ConfiguratorParameters {
    wohnflaeche: number
    relativeWohnlage: RelativeWohnlage
    lage: Lage
    deckenhoehe: number
    bausubstanz: Bausubstanz
    heizungsart: Heizungsart
    fensterflaecheRelativ: number
    fensterflaecheAbsolut: number // todo maybe just use one of these, and do the calculation in the input fields
    windows: Array<WindowConfiguration>
    energieEinheitsKosten: Map<Heizungsart, number>
}


const DEFAULT_ENERGY_UNIT_COST = new Map<Heizungsart, number>(
    [
        [Heizungsart.Gas, 0.27],
        [Heizungsart.Strom, 0.5],
        [Heizungsart.Pellets, 1], // TODO: find actual value
        [Heizungsart.Fernwaerme, 1] // TODO: find actual value
    ]
)



const HEATING_ENERGY_SOURCE_EFFICIENCY_MAP = new Map<Heizungsart, number>(
    [
        [Heizungsart.Gas, 0.88],
        [Heizungsart.Strom, 1],
        [Heizungsart.Pellets, 0.9],
        [Heizungsart.Fernwaerme, 1]
    ]
)


function calc_external_wall_area(params: ConfiguratorParameters): number {
    const singleOuterSurfaceArea = Math.sqrt(params.wohnflaeche) * params.deckenhoehe
    switch (params.relativeWohnlage) {
        case RelativeWohnlage.AmEck :
            return singleOuterSurfaceArea * 2
        case RelativeWohnlage.Freistehend:
            return singleOuterSurfaceArea * 4
        case RelativeWohnlage.Innenliegend:
            return singleOuterSurfaceArea * 1
        default:
            // TODO: maybe raise error here
            return 0
    }
}

function calc_ceiling_and_floor_area(params: ConfiguratorParameters): number {
    switch (params.lage) {
        case Lage.DG:
            return params.wohnflaeche
        case Lage.EG:
            return params.wohnflaeche
        case Lage.Zwischengeschoss:
            return 0
        case Lage.DG_EG:
            return params.wohnflaeche
        default:
            // TODO: maybe raise error here
            return 0
    }
}

function calc_room_volume(params: ConfiguratorParameters): number {
    return params.wohnflaeche * params.deckenhoehe
}


function calc_effective_window_area(params: ConfiguratorParameters): number {
    // Using this snippet here https://stackoverflow.com/a/39214814
    const windowArea = params.windows.map(w => w.areaPerWindow * w.NumberOfWindows).reduce((sum, current) => sum + current)
    return windowArea
}

function calc_effective_external_wall_area(params: ConfiguratorParameters): number {
    const windowArea = calc_effective_window_area(params)
    const effectiveWallArea = calc_external_wall_area(params) - windowArea
    // TODO: this could become negative, if the user inputs are not properly configured
    return effectiveWallArea
}


function get_u_value_map(params: ConfiguratorParameters): Map<ComponentWithUValue, number> {
    switch (params.bausubstanz) {
        case Bausubstanz.Neubau:
            const uValueMap = new Map<ComponentWithUValue, number>([
                [ComponentWithUValue.Wall, 0.2],
                [ComponentWithUValue.Window, 0.8],
                [ComponentWithUValue.Floor, 0.4],
                [ComponentWithUValue.Roof, 0.2]
            ])
            return uValueMap
        case Bausubstanz.AltbauSaniert:
            const uValueMap = new Map<ComponentWithUValue, number>([
                [ComponentWithUValue.Wall, 0.8],
                [ComponentWithUValue.Window, 1.3],
                [ComponentWithUValue.Floor, 0.4],
                [ComponentWithUValue.Roof, 0.5]
            ])
            return uValueMap
        case Bausubstanz.Altbau:
            const uValueMap = new Map<ComponentWithUValue, number>([
                [ComponentWithUValue.Wall, 1.4],
                [ComponentWithUValue.Window, 2.7],
                [ComponentWithUValue.Floor, 0.4],
                [ComponentWithUValue.Roof, 1.4]
            ])
            return uValueMap
    }
}


function calc_H_T(params: ConfiguratorParameters): Map<ComponentWithUValue, number> {
    const uValueMap = get_u_value_map(params)
    const H_T_valueMap = new Map<ComponentWithUValue, number>(
        [
            [ComponentWithUValue.Wall, uValueMap.get(ComponentWithUValue.Wall) * calc_effective_external_wall_area(params)],
            [ComponentWithUValue.Window, uValueMap.get(ComponentWithUValue.Window) * calc_effective_window_area(params)],
            [ComponentWithUValue.Floor, uValueMap.get(ComponentWithUValue.Floor) * calc_ceiling_and_floor_area(params)],
            [ComponentWithUValue.Roof, uValueMap.get(ComponentWithUValue.Roof) * calc_ceiling_and_floor_area(params)]
        ]
    )
    return H_T_valueMap
}

function calc_H_V(params: ConfiguratorParameters): number {
    const H_V = 0.163 * calc_room_volume(params)
    return H_V
}


function calc_Q_i(params: ConfiguratorParameters): number {
    const Q_i = 22 * 0.32 * params.wohnflaeche
    return Q_i
}


function calc_Q_s(params: ConfiguratorParameters): number {
    const Q_s = calc_effective_window_area(params) * 150 * 0.65 * 0.567
    return Q_s
}


function calc_Q_H(params: ConfiguratorParameters): number {
    const heizgradstunden = 66000
    const Q_H = heizgradstunden * calc_H_T_total(params) + calc_H_V(params) - 0.95 * (calc_Q_s(params) + calc_Q_i(params))
    return Q_H
}


function calc_H_T_total(params: ConfiguratorParameters): number {
    let H_T_total = 0
    const H_T_valueMap = calc_H_T(params)
    H_T_valueMap.forEach(
        H_T_i => {
            H_T_total += H_T_i
        }
    )
    const H_T_total_final = H_T_total // return const instead of variable
    return H_T_total_final
}




function calc_effective_heating_cost(params: ConfiguratorParameters): number {
    const H_T_total = calc_H_T_total(params)
    const heating_cost = H_T_total / HEATING_ENERGY_SOURCE_EFFICIENCY_MAP.get(params.heizungsart) * params.energieEinheitsKosten.get(params.heizungsart)
    return heating_cost
}


function calc_savings_heizkoerperbuerste(params: ConfiguratorParameters): number {
    let savingsCoefficient
    switch (params.bausubstanz) {
        case Bausubstanz.Altbau:
            savingsCoefficient = 0.05
        case Bausubstanz.AltbauSaniert:
            savingsCoefficient = 0.03
        case Bausubstanz.Neubau:
            savingsCoefficient = 0.02
    }
    const savings = savingsCoefficient * calc_effective_heating_cost(params)
    return savings
}