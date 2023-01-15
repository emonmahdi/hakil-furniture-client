import React from 'react'
import { Outlet } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard'
import NavBarTop from '../shared/NavBarTop'

const DashboardLayout = () => {
  return (
    <div>
      <NavBarTop />
      <Dashboard /> 
    </div>
  )
}

export default DashboardLayout
