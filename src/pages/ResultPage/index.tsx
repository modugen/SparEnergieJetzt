import { Link, Stack, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import { filter } from 'lodash-es'
import React, { ReactElement } from 'react'
import { ShareMenu } from '../../components/ShareMenu'
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
          <Typography variant='body1' padding='0 12% 0' textAlign='center'>
            Nachfolgend unsere Vorschläge gelistet nach Einsparpotenzial innerhalb von einer
            Heizperiode. Wie wir zu den Ergebnissen komment kannst du <Link href=''>hier</Link> nachlesen
          </Typography>
          <Typography variant='subtitle1' textAlign='center'>
            Kläre auf und teile deine Erkenntnisse!
          </Typography>
        </Stack>
        <Stack spacing={4} flexDirection='column' display='flex' alignItems='center'>
          {filter(results, (result) => result.calculation(config) > 0)
            .reverse()
            .map((result, index) => (
              <ResultCard
                result={{ ...result }}
                savedValue={result.calculation(config)}
                key={index}
              />
            ))}
        </Stack>
        <Stack paddingTop={theme.spacing(5)} marginBottom={theme.spacing(6)} spacing={2}>
          <Typography variant='body1' padding='0 12% 0' textAlign='center'>
            Die hier gelisteten Maßnahmen haben keinen Anspruch auf Vollständigkeit. Sie haben ein
            Produkt oder eine Idee, die wir hier noch abbilden sollten, sodass wir gemeinsam besser
            Energie sparen können? Schreiben sie uns: <Link href='mailto:info@modugen.de'>info@modugen.de</Link>
          </Typography>
        </Stack>
      </Container>
      <ShareMenu />
    </Box>
  )
}
