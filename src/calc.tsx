
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
    Neubau= "Neubau"
  }
  
  enum Heizungsart {
    Gas = "Gas"
    Strom = "Strom"
    Pellets = "Pellets"
    Fernwaerme = Fernwaerme
  
  }
  
  
  interface ConfiguratorParameters {
    wohnflaeche: number;
    relative_wohnlage: RelativeWohnlage;
    lage: Lage;
    deckenhoehe: number;
    bausubstanz: Bausubstanz;
    heizungsart: Heizungsart;
    fensterflaeche_relativ: number;
    fensterflaeche_absolut: number; // todo maybe just use one of these, and do the calculation in the input fields
  }
  
  
  
  function calc_external_wall_area(params: ConfiguratorParameters): number {
    const single_outer_surface_area = Math.sqrt(params.wohnflaeche) * params.deckenhoehe
    if (params.relative_wohnlage == RelativeWohnlage.AmEck) {
      return single_outer_surface_area * 2
    }
    else if (params.relative_wohnlage == RelativeWohnlage.Freistehend) {
      return single_outer_surface_area * 4
    }
    else if (params.relative_wohnlage == RelativeWohnlage.Innenliegend) {
      return single_outer_surface_area * 1
    } 
    else {
      // raise error here?
      return 0
    }
  }
      
  function calc_ceiling_and_floor_area(params: ConfiguratorParameters) : number {
    if (params.lage == Lage.DG) {
      return params.wohnflaeche;
    }
    else if (params.lage == Lage.EG) {
      return params.wohnflaeche;
    }
    else if (params.lage == Lage.Zwischengeschoss) {
      return 0 // 0 area in this case
    }
    else if (params.lage == Lage.DG_EG) {
      return params.wohnflaeche;
    }
    else {
      // raise error here?
      return 0
    }
  }
  
  
  