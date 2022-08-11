import { cloneDeep } from 'lodash-es'
import create from 'zustand'
import { combine, persist } from 'zustand/middleware'
import { Bausubstanz, RelativeWohnlage, Heizungsart } from '../calc'

interface ConfiguratorStoreState {
  squareMeters: number
  buildingType: Bausubstanz
  storeyHeight: number
  apartmentPosition: RelativeWohnlage

  bigWindows: number
  mediumWindows: number
  smallWindows: number

  heatingType: Heizungsart
}

const initialState: ConfiguratorStoreState = {
  squareMeters: 100,
  buildingType: Bausubstanz.Altbau,
  storeyHeight: 2.8,
  apartmentPosition: RelativeWohnlage.Innenliegend,

  bigWindows: 0,
  mediumWindows: 0,
  smallWindows: 0,

  heatingType: Heizungsart.Gas,
}

export const useConfiguratorStore = create(
  persist(
    combine(cloneDeep(initialState), (set) => ({
      clear: () => set(cloneDeep(initialState)),

      setSquareMeters: (squareMeters: number) => set({ squareMeters }),
      setStoreyHeight: (storeyHeight: number) => set({ storeyHeight }),
      setBuildingType: (buildingType: Bausubstanz) => set({ buildingType }),
      setApartmentPosition: (apartmentPosition: RelativeWohnlage) => set({ apartmentPosition }),
      setBigWindows: (bigWindows: number) => set({ bigWindows }),
      setMediumWindows: (mediumWindows: number) => set({ mediumWindows }),
      setSmallWindows: (smallWindows: number) => set({ smallWindows }),
      setHeatingType: (heatingType: Heizungsart) => set({ heatingType }),
    })),
    {
      name: 'configurator-storage',
    },
  ),
)
