import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../component/layout/DefaultLayout'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import UserLayout from '../component/layout/userLayout'




const AppRoutes = () => {
  return (
    <>
 <Routes>
    {/* public pages  */}
    <Route path='/' element={<DefaultLayout/>}>
    <Route index element={<Login/>}/>
    </Route> 

    {/* private pages  */}
    <Route path='/admin' element={<UserLayout/>}>
    <Route index element={<Dashboard/>}/>
    </Route>
 </Routes>

    </>
  )
}

export default AppRoutes