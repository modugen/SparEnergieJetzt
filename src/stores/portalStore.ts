import { cloneDeep } from 'lodash-es'
import create from 'zustand'
import { combine } from 'zustand/middleware'

interface PortalStoreState {
  headerPortalRoot: HTMLDivElement | null
}

const initialState: PortalStoreState = {
  headerPortalRoot: null,
}

export const usePortalStore = create(
  combine(cloneDeep(initialState), (set) => ({
    clear: () => set(cloneDeep(initialState)),

    setHeaderPortalRoot: (headerPortalRoot: HTMLDivElement | null) => set({ headerPortalRoot }),
  })),
)
