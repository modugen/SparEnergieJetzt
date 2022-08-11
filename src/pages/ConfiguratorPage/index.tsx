import { Button, InputAdornment, OutlinedInput, Pagination, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { ReactElement, useMemo } from 'react'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import littleStoreyImg from '../../images/storey_height/little.png'
import mediumStoreyImg from '../../images/storey_height/medium.png'
import bigStoreyImg from '../../images/storey_height/big.png'
import { useConfiguratorStore } from '../../stores/configuratorStore'
import { SelectButtonGroup } from '../../components/SelectButtonGroup'
import { Center } from '../../components/Center'
import innerImg from '../../images/apartment_position/innenliegend.png'
import cornerImg from '../../images/apartment_position/am_eck.png'
import detachedImg from '../../images/apartment_position/freistehend.png'

export function ConfiguratorPage(): ReactElement {
  const navigate = useNavigate()
  const location = useLocation()

  const { storeyHeight, setStoreyHeight, apartmentPosition, setApartmentPosition  } = useConfiguratorStore()

  const page = useMemo(
    () => parseInt(location.pathname.charAt(location.pathname.length - 1) as string) || 1,
    [location.pathname],
  )

  const pages = 4

  return (
    <Container>
      <Routes>
        <Route
          path='step-1'
          element={
            <Stack>
              <SelectButtonGroup
                config={[
                  {
                    text: '2,5m',
                    img: littleStoreyImg,
                    selected: storeyHeight === 2.5,
                    onClick: () => setStoreyHeight(2.5),
                  },
                  {
                    text: '2,8m',
                    img: mediumStoreyImg,
                    selected: storeyHeight === 2.8,
                    onClick: () => setStoreyHeight(2.8),
                  },
                  {
                    text: '3,2m',
                    img: bigStoreyImg,
                    selected: storeyHeight === 3.2,
                    onClick: () => setStoreyHeight(3.2),
                  },
                ]}
              />
              <Typography textAlign='center'>Oder gib deine Deckenhöhe individuell an!</Typography>
              <Center>
                <OutlinedInput
                  value={storeyHeight}
                  onChange={(e) => setStoreyHeight(parseFloat(e.target.value))}
                  type='number'
                  endAdornment={<InputAdornment position='end'>m²</InputAdornment>}
                  aria-describedby='outlined-weight-helper-text'
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                  size='small'
                />
              </Center>
            </Stack>
          }
        />
        <Route path='step-2' element={
          <SelectButtonGroup
            config={[
              {
                text: 'innenliegend',
                img: innerImg,
                selected: apartmentPosition === 'innenliegend',
                onClick: () => setApartmentPosition('innenliegend'),
              },
              {
                text: 'am Eck',
                img: cornerImg,
                selected: apartmentPosition === 'am-eck',
                onClick: () => setApartmentPosition('am-eck'),
              },
              {
                text: 'freistehend',
                img: detachedImg,
                selected: apartmentPosition === 'freistehend',
                onClick: () => setApartmentPosition('freistehend'),
              },
            ]}
          />
        }/>
        <Route path='step-3' element={<Typography>Page 3</Typography>} />
        <Route path='step-4' element={<Typography>Page 4</Typography>} />
      </Routes>

      <Button
        variant='contained'
        onClick={() => {
          if (page >= pages) {
            navigate('../results')
          } else {
            navigate(`step-${page + 1}`)
          }
        }}
      >
        Weiter
      </Button>
      <Link to='/'>Landing page</Link>

      <Pagination
        count={pages}
        variant='outlined'
        page={page}
        onChange={(_, page) => navigate(`step-${page}`)}
      />
    </Container>
  )
}
