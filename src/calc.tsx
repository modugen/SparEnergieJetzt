
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


interface ConfiguratorParameters {
    wohnflaeche: number
    relativeWohnlage: RelativeWohnlage
    lage: Lage
    deckenhoehe: number
    bausubstanz: Bausubstanz
    heizungsart: Heizungsart
    fensterflaecheRelativ: number
    fensterflaecheAbsolut: number // todo maybe just use one of these, and do the calculation in the input fields
}



function calc_external_wall_area(params: ConfiguratorParameters): number {
    const singleOuterSurfaceArea = Math.sqrt(params.wohnflaeche) * params.deckenhoehe
    if (params.relativeWohnlage == RelativeWohnlage.AmEck) {
        return singleOuterSurfaceArea * 2
    }
    else if (params.relativeWohnlage == RelativeWohnlage.Freistehend) {
        return singleOuterSurfaceArea * 4
    }
    else if (params.relativeWohnlage == RelativeWohnlage.Innenliegend) {
        return singleOuterSurfaceArea * 1
    }
    else {
        // raise error here?
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
            return 0
    }
}


