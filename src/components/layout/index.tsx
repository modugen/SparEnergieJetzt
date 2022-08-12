import { Box } from '@mui/system'
import React, { ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <Box minHeight='100vH' sx={{ overflowX: 'hidden' }} display='flex' flexDirection='column'>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
