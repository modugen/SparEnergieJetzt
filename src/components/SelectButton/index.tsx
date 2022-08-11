import { InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import { Box, useTheme } from '@mui/system'
import { isFunction } from 'lodash'
import React, { ReactElement } from 'react'
import { Center } from '../Center'

interface Props {
  text: string
  img: string
  onClick?: () => void
  selected?: boolean

  inputNumberValue?: number
  onChangeInputNumberValue?: (val: number) => void
  inputAdornment?: string
}

export function SelectButton({
  text,
  onClick,
  img,
  selected = false,
  inputNumberValue,
  onChangeInputNumberValue,
  inputAdornment,
}: Props): ReactElement {
  const theme = useTheme()

  return (
    <Box
      style={{
        backgroundColor: selected ? green[100] : undefined,
        display: 'inline-block',
        padding: theme.spacing(4),
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25',
        // boxShadow: 4,
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
      <Box minHeight='3em' display='flex' alignItems='center' justifyContent='center' marginTop={1}>
        <Typography textAlign='center' lineHeight='1.5em'>
          {text}
        </Typography>
      </Box>
      {isFunction(onChangeInputNumberValue) && (
        <Box>
          <OutlinedInput
            value={inputNumberValue}
            type='number'
            onChange={
              onChangeInputNumberValue
                ? (e) => onChangeInputNumberValue(parseFloat(e.target.value))
                : undefined
            }
            endAdornment={<InputAdornment position='end'>{inputAdornment}</InputAdornment>}
            aria-describedby='outlined-weight-helper-text'
            inputProps={{
              'aria-label': 'weight',
              min: 0,
            }}
            size='small'
            style={{ alignSelf: 'center' }}
          />
        </Box>
      )}
    </Box>
  )
}
