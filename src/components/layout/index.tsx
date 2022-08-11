import { Box } from '@mui/system'
import React, { ReactNode } from 'react'
import Header from '../header'
import { ShareMenu } from '../ShareMenu'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <Box minHeight='100vH' display='flex' flexDirection='column'>
      <Header />
      {children}
      <ShareMenu />
      <div>Footer</div>
    </Box>
  )
}

export default Layout
