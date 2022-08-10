import { Container } from '@mui/system'
import React, { CSSProperties, ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export function LandingPageSection({children, style}: Props): ReactElement {
  return (
    <Container maxWidth={false} style={{
      ...style
    }}>
      {children}
    </Container>
  )
}