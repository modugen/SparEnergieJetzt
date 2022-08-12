import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { ResultPage } from './pages/ResultPage'
import Layout from './components/layout'
import { useConfiguratorStore } from './stores/configuratorStore'
import { ErrorBoundary } from 'react-error-boundary'
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

function App() {
  const resetConfiguratorStore = useConfiguratorStore((state) => state.clear)

  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <Stack
          display='flex'
          flexGrow={1}
          justifyContent='center'
          alignItems='center'
          height='100vH'
          style={{ backgroundColor: grey[200] }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Fehler
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Der Konfigurator ist in einen fehlerhaften Zustand gelangt. Bitte klicke unten, um
                den Zustand zurückzusetzen
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small' onClick={resetConfiguratorStore}>
                Zurücksetzen
              </Button>
            </CardActions>
          </Card>
        </Stack>
      )}
    >
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='configurator/*' element={<ConfiguratorPage />} />
          <Route path='results' element={<ResultPage />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
