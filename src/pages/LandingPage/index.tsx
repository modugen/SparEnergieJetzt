import { Container } from '@mui/system'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function LandingPage(): ReactElement {
  return (
    <Container>
      <div>
        <Link to='/results'>Result page</Link>
      </div>
      <div>
        <Link to='/configurator'>Configurator page</Link>
      </div>
    </Container>
  )
}
