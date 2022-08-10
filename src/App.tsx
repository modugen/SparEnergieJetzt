import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ConfiguratorPage } from './pages/ConfiguratorPage'
import { ResultPage } from './pages/ResultPage'
import Layout from './components/layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='configurator' element={<ConfiguratorPage />} />
        <Route path='results' element={<ResultPage />} />
      </Routes>
    </Layout>
  )
}

export default App
