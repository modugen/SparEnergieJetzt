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
        paddingTop: (theme) => theme.spacing(8),
        paddingBottom: (theme) => theme.spacing(8),
      }}
    >
      <Stack direction='column' spacing={3}>
        {children}
      </Stack>
    </Container>
  )
}
