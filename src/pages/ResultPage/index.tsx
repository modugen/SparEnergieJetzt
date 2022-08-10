import { Container } from '@mui/system'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export function ResultPage(): ReactElement {
  return (
    <Container>
      <Link to='/'>Landing page</Link>
    </Container>
  )
}
