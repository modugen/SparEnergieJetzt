import { Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import React, { ReactElement } from 'react'

interface Props {
  text: string
}

export function SelectButton({text}: Props): ReactElement {
  const theme = useTheme()

  return (
    <Box style={{
      display: 'inline-block',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25', 
      padding: theme.spacing(4)
    }}>
      <Box style={{
        backgroundColor: '#ebecf0', 
        width: 100, 
        height: 100
      }} />
      <Typography>{text}</Typography>
    </Box>
  )
}