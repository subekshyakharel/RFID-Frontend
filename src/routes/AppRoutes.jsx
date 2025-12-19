import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../component/layout/DefaultLayout'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import UserLayout from '../component/layout/userLayout'
import OrganizationAdmin from '../pages/organization/OrganizationAdmin'
import Organization from '../pages/organization/Organization'
import Settings from '../pages/organization/Settings'
import NewOrganization from '../pages/organization/NewOrganization'




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
    <Route path='organization' element={<Organization/>} />
    <Route path='org-admins' element={<OrganizationAdmin/>} />
    <Route path='settings' element={<Settings/>} />
    <Route path='new-org' element={<NewOrganization/>} />
    </Route>
 </Routes>

    </>
  )
}

export default AppRoutes