import { Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box, useTheme } from '@mui/system'
import React, { ReactElement } from 'react'
import { Center } from '../Center'

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
        width: 100, 
      }}
      onClick={onClick}
    >
      <Center>
        <img
          src={img}
          style={{
            height: 80,
          }}
        />
      </Center>
      <Box 
        minHeight="3em"
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={1}
      >
        <Typography textAlign='center' lineHeight="1.5em">{text}</Typography>
      </Box>
    </Box>
  )
}
