
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
}



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