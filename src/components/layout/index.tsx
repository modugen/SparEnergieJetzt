import React, { ReactNode } from 'react'
import Footer from '../footer'
import Header from '../header'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
