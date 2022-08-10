import React, { ReactNode } from 'react'
import Header from '../header'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  )
}

export default Layout
