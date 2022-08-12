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
import { RelativeWohnlage, Heizungsart, Lage } from '../../calc'
import dachgeschossImg from '../../images/apartment_type/dachgeschoss.png'
import mittelgeschossImg from '../../images/apartment_type/mittelgeschoss.png'
import erdgeschossImg from '../../images/apartment_type/erdgeschoss.png'
import bodenDachImg from '../../images/apartment_type/boden_dach.png'

const stepToQuestionMap: Record<number, string> = {
  1: 'In welchem Zustand befindet sich dein Gebäude/Apartment?',
  2: 'Wie hoch ist die Deckenhöhe in deinen Zimmern?',
  3: 'An welcher Position befindet sich dein Gebäude/Apartment?',
  4: 'Wie viele Fenster hat dein Gebäude/Apartment?',
  5: 'Wie sieht die Lage deines Apartments aus?',
  6: 'Wie viele Personen leben in dem Haushalt?'
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

    location: apartmentLocation,
    setLocation,

    persons, 
    setPersons
  } = useConfiguratorStore()

  const page = useMemo(
    () => parseInt(location.pathname.charAt(location.pathname.length - 1) as string) || 1,
    [location.pathname],
  )

  const pages = Object.keys(stepToQuestionMap).length

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
                    selected: apartmentPosition === RelativeWohnlage.Innenliegend,
                    onClick: () => setApartmentPosition(RelativeWohnlage.Innenliegend),
                  },
                  {
                    text: 'am Eck',
                    img: cornerImg,
                    selected: apartmentPosition === RelativeWohnlage.AmEck,
                    onClick: () => setApartmentPosition(RelativeWohnlage.AmEck),
                  },
                  {
                    text: 'freistehend',
                    img: detachedImg,
                    selected: apartmentPosition === RelativeWohnlage.Freistehend,
                    onClick: () => setApartmentPosition(RelativeWohnlage.Freistehend),
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
                    selected: heatingType === Heizungsart.Gas,
                    onClick: () => setHeatingType(Heizungsart.Gas),
                  },
                  {
                    text: 'Pelletheizung',
                    img: pelletHeatingImg,
                    selected: heatingType === Heizungsart.Pellets,
                    onClick: () => setHeatingType(Heizungsart.Pellets),
                  },
                  {
                    text: 'Fernwärme',
                    img: fernHeatingImg,
                    selected: heatingType === Heizungsart.Fernwaerme,
                    onClick: () => setHeatingType(Heizungsart.Fernwaerme),
                  },
                  {
                    text: 'Stromheizung',
                    img: electricityHeatingImg,
                    selected: heatingType === Heizungsart.Strom,
                    onClick: () => setHeatingType(Heizungsart.Strom),
                  },
                ]}
              />
            }
          />
          <Route
            path='step-5'
            element={
              <SelectButtonGroup
                config={[
                  {
                    text: 'Dachgeschoss',
                    img: dachgeschossImg,
                    selected: apartmentLocation === Lage.DG,
                    onClick: () => setLocation(Lage.DG),
                  },
                  {
                    text: 'Mittelgeschoss',
                    img: mittelgeschossImg,
                    selected: apartmentLocation === Lage.Zwischengeschoss,
                    onClick: () => setLocation(Lage.Zwischengeschoss),
                  },
                  {
                    text: 'Erdgeschoss',
                    img: erdgeschossImg,
                    selected: apartmentLocation === Lage.EG,
                    onClick: () => setLocation(Lage.EG),
                  },
                  {
                    text: 'Boden + Dach',
                    img: bodenDachImg,
                    selected: apartmentLocation === Lage.DG_EG,
                    onClick: () => setLocation(Lage.DG_EG),
                  },
                ]}
              />
            }
          />
                    <Route
            path='step-6'
            element={
              <Stack spacing={3}>
              <SelectButtonGroup
                config={[
                  {
                    text: '1 Person',
                    img: dachgeschossImg,
                    selected: persons === 1,
                    onClick: () => setPersons(1),
                  },
                  {
                    text: '2 Personen',
                    img: mittelgeschossImg,
                    selected: persons === 2,
                    onClick: () => setPersons(2),
                  },
                  {
                    text: '4 Personen',
                    img: erdgeschossImg,
                    selected: persons === 4,
                    onClick: () => setPersons(4),
                  },
                ]}
              />
              <Typography textAlign='center'>
              Oder gib die Anzahl der Personen individuell an!
            </Typography>
            <Center>
              <OutlinedInput
                value={persons}
                onChange={(e) => setPersons(parseInt(e.target.value))}
                type='number'
                endAdornment={<InputAdornment position='end'>Personen</InputAdornment>}
                aria-describedby='outlined-weight-helper-text'
                inputProps={{
                  'aria-label': 'weight',
                  min: 1, 
                }}
                size='small'
              />
            </Center>
          </Stack>
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
