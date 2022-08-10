import { Button, Pagination, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { ReactElement } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import littleStoreyImg from '../../images/storey_height/little.png'
import mediumStoreyImg from '../../images/storey_height/medium.png'
import bigStoreyImg from '../../images/storey_height/big.png'
import { useConfiguratorStore } from '../../stores/configuratorStore'
import { SelectButtonGroup } from '../../components/SelectButtonGroup'

export function ConfiguratorPage(): ReactElement {
  const navigate = useNavigate()

  const { storeyHeight, setStoreyHeight } = useConfiguratorStore()

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
            </Stack>
          }
        />
        <Route path='step-2' element={<Typography>Page 2</Typography>} />
        <Route path='step-3' element={<Typography>Page 3</Typography>} />
        <Route path='step-4' element={<Typography>Page 4</Typography>} />
      </Routes>

      <Button>Weiter</Button>
      <Link to='/'>Landing page</Link>

      <Pagination
        count={10}
        variant='outlined'
        page={1}
        onChange={(_, page) => navigate(`step-${page}`)}
      />
    </Container>
  )
}
