import { ConfiguratorParameters, DEFAULT_ENERGY_UNIT_COST, Lage } from '../calc'
import { useConfiguratorStore } from '../stores/configuratorStore'

export function useResultConfiguration(): ConfiguratorParameters {
  const {
    squareMeters,
    buildingType,
    storeyHeight,
    apartmentPosition,

    bigWindows,
    mediumWindows,
    smallWindows,

    heatingType,
  } = useConfiguratorStore()

  return {
    wohnflaeche: squareMeters,
    relativeWohnlage: apartmentPosition,
    // TODO: implement lage
    lage: Lage.DG_EG,
    deckenhoehe: storeyHeight,
    bausubstanz: buildingType,
    heizungsart: heatingType,
    windows: [
      {
        areaPerWindow: 1.5,
        NumberOfWindows: bigWindows,
      },
      {
        areaPerWindow: 1,
        NumberOfWindows: mediumWindows,
      },
      {
        areaPerWindow: 0.5,
        NumberOfWindows: smallWindows,
      },
    ],
    energieEinheitsKosten: DEFAULT_ENERGY_UNIT_COST,
    anzahlBewohner: 1,
  }
}
