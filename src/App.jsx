import React, { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchAdminAction } from './features/admin/AdminAction'


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAdminAction());
  }, [dispatch])
  return (
    <div>
      <AppRoutes/>
      <ToastContainer/>
    </div>
  )
}

export default App