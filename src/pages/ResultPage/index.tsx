import Box from '@mui/material/Box'
import { Container } from '@mui/system'
import React, { ReactElement } from 'react'
import ResultCard from './component/resultCard'
import { results } from './constant'

export function ResultPage(): ReactElement {
  return (
    <Container>
      <Box flexDirection='column' display='flex' alignItems='center'>
        {results.map((result, index) => (
          <ResultCard result={result} key={index} />
        ))}
      </Box>
    </Container>
  )
}
