import { Stack, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import { filter } from 'lodash-es'
import React, { ReactElement } from 'react'
import { DEFAULT_ENERGY_UNIT_COST, Lage } from '../../calc'
import { useConfiguratorStore } from '../../stores/configuratorStore'
import ResultCard from './component/resultCard'
import { results } from './constant'

// TODO: Add filter for results if saving is 0

export function ResultPage(): ReactElement {
  const theme = useTheme()

  const {
    squareMeters,
    buildingType,
    storeyHeight,
    apartmentPosition,

    bigWindows,
    mediumWindows,
    smallWindows,

    heatingType,
  } = useConfiguratorStore()

  const config = {
    wohnflaeche: squareMeters,
    relativeWohnlage: apartmentPosition,
    // TODO: implement lage
    lage: Lage.DG_EG,
    deckenhoehe: storeyHeight,
    bausubstanz: buildingType,
    heizungsart: heatingType,
    fensterflaecheRelativ: 0,
    fensterflaecheAbsolut: 0,
    windows: [
      {
        areaPerWindow: 1.5,
        NumberOfWindows: bigWindows,
      },
      {
        areaPerWindow: 1,
        NumberOfWindows: mediumWindows,
      },
      {
        areaPerWindow: 0.5,
        NumberOfWindows: smallWindows,
      },
    ],
    energieEinheitsKosten: DEFAULT_ENERGY_UNIT_COST,
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[50], paddingBottom: 5, overflowX: 'hidden' }}>
      <Container>
        <Stack paddingTop={theme.spacing(5)} marginBottom={theme.spacing(6)} spacing={2}>
          <Typography variant='h2' textAlign='center'>
            Du hast es in der Hand!
          </Typography>
          <Typography padding='0 12% 0' textAlign='center'>
            Nachfolgend unsere Vorschläge gelistet nach Einsparpotenzial innerhalb von einer
            Heizperiode. Wie wir zu den Ergebnissen komment kannst du hier nachlesen
          </Typography>
          <Typography variant='h4' textAlign='center'>
            Kläre auf und teile deine Erkenntnisse!
          </Typography>
        </Stack>
        <Stack spacing={4} flexDirection='column' display='flex' alignItems='center'>
          {filter(results, (result) => result.calculation(config) > 0).map((result, index) => (
            <ResultCard
              result={{ ...result }}
              savedValue={result.calculation(config)}
              key={index}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
