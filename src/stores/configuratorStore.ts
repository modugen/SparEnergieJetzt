import { cloneDeep } from 'lodash-es'
import create from 'zustand'
import { combine, persist } from 'zustand/middleware'

type BuildingType = 'altbau' | 'altbau-saniert' | 'neubau'
type ApartmentPosition = 'innenliegend' | 'am-eck' | 'freistehend'
type HeatingType = 'gas' | 'electricity' | 'pellet' | 'fern'

interface ConfiguratorStoreState {
  squareMeters: number
  buildingType: BuildingType
  storeyHeight: number
  apartmentPosition: ApartmentPosition

  bigWindows: number
  mediumWindows: number
  smallWindows: number

  heatingType: HeatingType
}

const initialState: ConfiguratorStoreState = {
  squareMeters: 100,
  buildingType: 'altbau',
  storeyHeight: 2.8,
  apartmentPosition: 'innenliegend',

  bigWindows: 0,
  mediumWindows: 0,
  smallWindows: 0,

  heatingType: 'gas',
}

export const useConfiguratorStore = create(
  persist(
    combine(cloneDeep(initialState), (set) => ({
      clear: () => set(cloneDeep(initialState)),

      setSquareMeters: (squareMeters: number) => set({ squareMeters }),
      setStoreyHeight: (storeyHeight: number) => set({ storeyHeight }),
      setBuildingType: (buildingType: BuildingType) => set({ buildingType }),
      setApartmentPosition: (apartmentPosition: ApartmentPosition) => set({ apartmentPosition }),
      setBigWindows: (bigWindows: number) => set({ bigWindows }),
      setMediumWindows: (mediumWindows: number) => set({ mediumWindows }),
      setSmallWindows: (smallWindows: number) => set({ smallWindows }),
      setHeatingType: (heatingType: HeatingType) => set({ heatingType }),
    })),
    {
      name: 'configurator-storage',
    },
  ),
)
