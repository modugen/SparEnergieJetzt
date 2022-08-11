import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme, globalStyles } from '../src/styles'
import { GlobalStyles } from '@mui/material'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)

const AppWithProviders = () => (
  <React.StrictMode>
    <GlobalStyles styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)

root.render(<AppWithProviders />)

// if (root.) {
//   hydrate(<AppWithProviders />, rootElement)
// } else {
//   render(<AppWithProviders />, rootElement)
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
