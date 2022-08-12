import './App.css'
import ReactGA from 'react-ga'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { ResultPage } from './pages/ResultPage'
import Layout from './components/layout'
import { useConfiguratorStore } from './stores/configuratorStore'
import { ErrorBoundary } from 'react-error-boundary'
import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import CookieConsent from 'react-cookie-consent'

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
        <CookieConsent
          location='bottom'
          buttonText='Alle Akzeptieren'
          style={{ background: '#3D802D' }}
          buttonStyle={{
            color: '#4e503b',
            fontSize: '13px',
            fontFamily: 'arial',
            backgroundColor: 'white',
          }}
          expires={150}
          onAccept={() => {
            ReactGA.initialize('G-HBVRKMT6YZ')
            ReactGA.pageview(window.location.pathname + window.location.search)
          }}
        >
          Diese Website verwendet Cookies, um die Funktionalität bereitzustellen. Leider ist eine
          Nutzung ohne Cookies aktuell nicht möglich!
        </CookieConsent>
      </Layout>
    </ErrorBoundary>
  )
}

export default App
