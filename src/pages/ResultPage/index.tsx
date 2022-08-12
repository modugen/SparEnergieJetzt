import { Stack, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import { filter } from 'lodash-es'
import React, { ReactElement } from 'react'
import { useResultConfiguration } from '../../hooks/useResultConfiguration'
import ResultCard from './component/resultCard'
import { results } from './constant'

export function ResultPage(): ReactElement {
  const theme = useTheme()

  const config = useResultConfiguration()

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[50], paddingBottom: 5 }}>
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
