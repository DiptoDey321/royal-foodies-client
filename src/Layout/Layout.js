import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function Layout() {
  return (
    <div>
         <div className="h-fit w-full">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Layout