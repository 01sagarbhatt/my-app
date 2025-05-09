import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footercomponent from './Footercomponent'

function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>
    <Footercomponent></Footercomponent>
    
    </>
  )
}

export default Layout