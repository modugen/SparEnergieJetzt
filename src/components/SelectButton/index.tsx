import { InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material'
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
    <Stack
      direction='column'
      spacing={1}
      sx={{
        backgroundColor: selected ? green[100] : undefined,
        display: 'inline-block',
        padding: {
          xs: theme.spacing(3),
          md: theme.spacing(4),
        },
        boxShadow: 3,
        cursor: onClick ? 'pointer' : undefined,
        width: {
          xs: 50,
          md: 100,
        },
      }}
      onClick={onClick}
    >
      <Center>
        <Box
          sx={{
            height: {
              xs: 40,
              md: 80,
            },
            width: {
              xs: 60,
              md: 100,
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={img}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
            }}
          />
        </Box>
      </Center>
      <Box minHeight='3em' display='flex' alignItems='center' justifyContent='center' marginTop={1}>
        <Typography textAlign='center' lineHeight='1.5em' fontSize={{ xs: '0.8em', md: '1em' }}>
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
            endAdornment={
              <InputAdornment position='end' sx={{ display: { xs: 'none', md: 'flex' } }}>
                {inputAdornment}
              </InputAdornment>
            }
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
    </Stack>
  )
}
