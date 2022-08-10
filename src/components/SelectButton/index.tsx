import { Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box, useTheme } from '@mui/system'
import React, { ReactElement } from 'react'

interface Props {
  text: string
  img: string
  onClick?: () => void
  selected?: boolean
}

export function SelectButton({ text, onClick, img, selected = false }: Props): ReactElement {
  const theme = useTheme()

  return (
    <Box
      style={{
        backgroundColor: selected ? green[100] : undefined,
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
