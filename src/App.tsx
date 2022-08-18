import './App.css'
import ReactGA from 'react-ga'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { ResultPage } from './pages/ResultPage'
import Layout from './components/layout'
import CookieConsent, {getCookieConsentValue} from 'react-cookie-consent'
import { useEffect } from 'react'

function App() {
  const isReactSnap = navigator.userAgent === 'ReactSnap'

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line camelcase
    // gtag('event', 'conversion', { send_to: 'AW-10949782711/c1xwCIanuNEDELfZoeUo' })
  }, [])

  const initializeGa = () => {
    const cookieVal = getCookieConsentValue()
    if (cookieVal === 'true') {
      ReactGA.initialize('G-HBVRKMT6YZ', {
        standardImplementation: true
      })
      ReactGA.pageview(window.location.pathname + window.location.search)
      console.log('Google analytics initialized')
    } else {
      console.log('Google analytics could not be initialized as cookies are not allowed')
      console.log(cookieVal)
    }
  }

  useEffect(() => {
    initializeGa()
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='configurator/*' element={<ConfiguratorPage />} />
        <Route path='results' element={<ResultPage />} />
      </Routes>
      {!isReactSnap && (
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
          onAccept={initializeGa}
        >
          Diese Website verwendet Cookies, um die Funktionalität bereitzustellen. Leider ist eine
          Nutzung ohne Cookies aktuell nicht möglich!
        </CookieConsent>
      )}
    </Layout>
  )
}

export default App
