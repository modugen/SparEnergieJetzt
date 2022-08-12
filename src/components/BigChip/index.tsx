import { Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import React, { CSSProperties, ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
  style?: CSSProperties
}

export function BigChip({ children, style }: Props): ReactElement {
  return (
    <Box padding={2} width={70} style={{ backgroundColor: grey[200], ...style }} borderRadius={100}>
      <Typography variant='h5' textAlign='center'>
        {children}
      </Typography>
    </Box>
  )
}
