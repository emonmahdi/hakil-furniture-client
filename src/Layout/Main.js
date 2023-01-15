import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import NavBarTop from '../shared/NavBarTop'

const Main = () => {
  return (
    <div>
      <NavBarTop />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
