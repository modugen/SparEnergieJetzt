import { Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import React, { ReactElement } from 'react'

interface Props {
  text: string
  img: string
  onClick?: () => void
}

export function SelectButton({ text, onClick, img }: Props): ReactElement {
  const theme = useTheme()

  return (
    <Box
      style={{
        display: 'inline-block',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25',
        padding: theme.spacing(4),
        cursor: onClick ? 'pointer' : undefined,
      }}
      onClick={onClick}
    >
      <img
        src={img}
        style={{
          width: 100,
        }}
      />
      <Typography textAlign='center'>{text}</Typography>
    </Box>
  )
}
