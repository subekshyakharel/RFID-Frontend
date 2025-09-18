import React from 'react'
import Header from "./Header"
import { Outlet } from 'react-router-dom'
import Footer from "./Footer"

const UserLayout = () => {
  return (
    <div>
        <Header/>

        <main className="main">
            <Outlet/>
        </main>

        <Footer/>
    </div>
  )
}

export default UserLayout