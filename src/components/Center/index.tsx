import Grid2 from '@mui/material/Unstable_Grid2'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Center({ children }: Props) {
  return (
    <Grid2 container justifyContent='center'>
      {children}
    </Grid2>
  )
}
