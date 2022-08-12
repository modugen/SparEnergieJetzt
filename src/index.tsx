import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { theme, globalStyles } from '../src/styles'
import { GlobalStyles } from '@mui/material'
import { hydrate, render } from 'react-dom'

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

const rootElement = document.getElementById('root')

if (rootElement?.hasChildNodes()) {
  hydrate(<AppWithProviders />, rootElement)
} else {
  render(<AppWithProviders />, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
