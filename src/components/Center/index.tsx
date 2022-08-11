import Grid2 from '@mui/material/Unstable_Grid2'
import React, { CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export function Center({ children, style }: Props) {
  return (
    <Grid2 container justifyContent='center' style={style}>
      {children}
    </Grid2>
  )
}
