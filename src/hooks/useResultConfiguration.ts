import { ConfiguratorParameters, DEFAULT_ENERGY_UNIT_COST } from '../calc'
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

    location,

    persons,
  } = useConfiguratorStore()

  return {
    wohnflaeche: squareMeters,
    relativeWohnlage: apartmentPosition,
    lage: location,
    deckenhoehe: storeyHeight,
    bausubstanz: buildingType,
    heizungsart: heatingType,
    windows: [
      {
        areaPerWindow: 4,
        NumberOfWindows: bigWindows,
      },
      {
        areaPerWindow: 2,
        NumberOfWindows: mediumWindows,
      },
      {
        areaPerWindow: 1,
        NumberOfWindows: smallWindows,
      },
    ],
    energieEinheitsKosten: DEFAULT_ENERGY_UNIT_COST,
    anzahlBewohner: persons,
  }
}
