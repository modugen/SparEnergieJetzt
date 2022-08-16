import { cloneDeep } from 'lodash-es'
import create from 'zustand'
import { combine, persist } from 'zustand/middleware'
import { Bausubstanz, RelativeWohnlage, Heizungsart, Lage } from '../calc'

interface ConfiguratorStoreState {
  squareMeters: number
  buildingType: Bausubstanz
  storeyHeight: number
  apartmentPosition: RelativeWohnlage

  bigWindows: number
  mediumWindows: number
  smallWindows: number

  heatingType: Heizungsart

  location: Lage

  persons: number
}

export const initialState: ConfiguratorStoreState = {
  squareMeters: 100,
  buildingType: Bausubstanz.Altbau,
  storeyHeight: 2.8,
  apartmentPosition: RelativeWohnlage.Innenliegend,

  bigWindows: 0,
  mediumWindows: 0,
  smallWindows: 0,

  heatingType: Heizungsart.Gas,

  location: Lage.DG,

  persons: 2,
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
      setLocation: (location: Lage) => set({ location }),
      setPersons: (persons: number) => set({ persons }),
    })),
    {
      name: 'configurator-storage',
      version: 1.0,
    },
  ),
)
