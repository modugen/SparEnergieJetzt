import { ReactElement, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePortalStore } from '../../../stores/portalStore'

interface Props {
  children: ReactNode
}

export function Portal({ children }: Props): ReactElement {
  const el = document.createElement('div')

  const headerPortalRoot = usePortalStore((state) => state.headerPortalRoot)

  useEffect(() => {
    if (headerPortalRoot) {
      headerPortalRoot.appendChild(el)
      return () => {
        headerPortalRoot.removeChild(el)
      }
    }
  }, [headerPortalRoot, el])

  return createPortal(children, el)
}
