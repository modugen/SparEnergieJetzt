import { Box } from '@mui/system'
import React, { ReactNode } from 'react'
import Header from '../header'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <Box minHeight='100vH' display='flex' flexDirection='column'>
      <Header />
      {children}
      <div>Footer</div>
    </Box>
  )
}

export default Layout
