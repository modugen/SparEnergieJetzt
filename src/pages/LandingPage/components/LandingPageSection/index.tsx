import { Container, Stack } from '@mui/system'
import React, { CSSProperties, ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export function LandingPageSection({ children, style }: Props): ReactElement {
  return (
    <Container
      maxWidth={false}
      sx={{
        ...style,
        padding: (theme) => theme.spacing(8),
      }}
    >
      {children}
    </Container>
  )
}
