import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { ResultPage } from './pages/ResultPage'
import Layout from './components/layout'
import CookieConsent, {getCookieConsentValue} from // getCookieConsentValue
'react-cookie-consent'
import { useEffect, useState } from 'react'

function App() {
  const isReactSnap = navigator.userAgent === 'ReactSnap'
  const [, setCookiesConsented] = useState(false)
  const getAndSetCookiesConstented = () => {
    const cookieVal = getCookieConsentValue()
    if (cookieVal === 'true'){
      console.log('Cookies have been enabled')
      setCookiesConsented(true)
    } else setCookiesConsented(false)
  }

  useEffect(() => {
    getAndSetCookiesConstented()
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
          onAccept={getAndSetCookiesConstented}
        >
          Diese Website verwendet Cookies, um die Funktionalität bereitzustellen. Leider ist eine
          Nutzung ohne Cookies aktuell nicht möglich!
        </CookieConsent>
      )}
    </Layout>
  )
}

export default App
