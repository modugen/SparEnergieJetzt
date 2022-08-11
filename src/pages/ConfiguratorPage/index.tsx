import { Button, InputAdornment, OutlinedInput, Pagination, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React, { ReactElement, useMemo } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import littleStoreyImg from '../../images/storey_height/little.png'
import mediumStoreyImg from '../../images/storey_height/medium.png'
import bigStoreyImg from '../../images/storey_height/big.png'
import { useConfiguratorStore } from '../../stores/configuratorStore'
import { SelectButtonGroup } from '../../components/SelectButtonGroup'
import { Center } from '../../components/Center'
import innerImg from '../../images/apartment_position/innenliegend.png'
import cornerImg from '../../images/apartment_position/am_eck.png'
import detachedImg from '../../images/apartment_position/freistehend.png'
import bigWindowImg from '../../images/windows/big.png'
import mediumWindowImg from '../../images/windows/medium.png'
import smallWindowImg from '../../images/windows/small.png'
import gasHeatingImg from '../../images/heating_type/gas.png'
import pelletHeatingImg from '../../images/heating_type/pellet.png'
import fernHeatingImg from '../../images/heating_type/fern.png'
import electricityHeatingImg from '../../images/heating_type/electricity.png'
import { Portal } from '../../components/header/Portal'

const stepToQuestionMap: Record<number, string> = {
  1: 'In welchem Zustand befindet sich dein Gebäude/Apartment?',
  2: 'Wie hoch ist die Deckenhöhe in deinen Zimmern?',
  3: 'An welcher Position befindet sich dein Gebäude/Apartment?',
  4: 'Wie viele Fenster hat dein Gebäude/Apartment?',
}

export function ConfiguratorPage(): ReactElement {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    storeyHeight,
    setStoreyHeight,
    apartmentPosition,
    setApartmentPosition,
    heatingType,
    setHeatingType,

    bigWindows,
    setBigWindows,
    mediumWindows,
    setMediumWindows,
    smallWindows,
    setSmallWindows,
  } = useConfiguratorStore()

  const page = useMemo(
    () => parseInt(location.pathname.charAt(location.pathname.length - 1) as string) || 1,
    [location.pathname],
  )

  const pages = 4

  return (
    <Container
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          marginTop: 64,
          marginBottom: 64,
        }}
      >
        <Routes>
          <Route
            path='step-1'
            element={
              <Stack spacing={3}>
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
                <Typography textAlign='center'>
                  Oder gib deine Deckenhöhe individuell an!
                </Typography>
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
          <Route
            path='step-2'
            element={
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
            }
          />
          <Route
            path='step-3'
            element={
              <Stack direction='column'>
                <SelectButtonGroup
                  config={[
                    {
                      text: 'große Fenster',
                      img: bigWindowImg,
                      inputAdornment: 'Stk.',
                      inputNumberValue: bigWindows,
                      onChangeInputNumberValue: setBigWindows,
                    },
                    {
                      text: 'mittelgroße Fenster',
                      img: mediumWindowImg,
                      inputAdornment: 'Stk.',
                      inputNumberValue: mediumWindows,
                      onChangeInputNumberValue: setMediumWindows,
                    },
                    {
                      text: 'kleine Fenster',
                      img: smallWindowImg,
                      inputAdornment: 'Stk.',
                      inputNumberValue: smallWindows,
                      onChangeInputNumberValue: setSmallWindows,
                    },
                  ]}
                />
              </Stack>
            }
          />
          <Route
            path='step-4'
            element={
              <SelectButtonGroup
                config={[
                  {
                    text: 'Gasheizung',
                    img: gasHeatingImg,
                    selected: heatingType === 'gas',
                    onClick: () => setHeatingType('gas'),
                  },
                  {
                    text: 'Pelletheizung',
                    img: pelletHeatingImg,
                    selected: heatingType === 'pellet',
                    onClick: () => setHeatingType('pellet'),
                  },
                  {
                    text: 'Fernwärme',
                    img: fernHeatingImg,
                    selected: heatingType === 'fern',
                    onClick: () => setHeatingType('fern'),
                  },
                  {
                    text: 'Stromheizung',
                    img: electricityHeatingImg,
                    selected: heatingType === 'electricity',
                    onClick: () => setHeatingType('electricity'),
                  },
                ]}
              />
            }
          />
        </Routes>
      </Box>

      <Center>
        <Stack spacing={3} marginBottom={(theme) => theme.spacing(3)}>
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
            {page === pages ? 'Ergebnisse' : 'Weiter'}
          </Button>

          <Pagination
            count={pages}
            variant='outlined'
            page={page}
            onChange={(_, page) => navigate(`step-${page}`)}
          />
        </Stack>
      </Center>
      <Portal>
        <Typography textAlign='center' style={{ color: 'black' }}>
          {stepToQuestionMap[page] as string}
        </Typography>
      </Portal>
    </Container>
  )
}
