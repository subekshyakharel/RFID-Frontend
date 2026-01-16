import React, { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { fetchAdminAction } from './features/admin/AdminAction'
import ModalWrapper from './component/modalWrapper/ModalWrapper'


const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAdminAction());
  }, [dispatch])
  return (
    <div>
      <AppRoutes/>
      <ToastContainer/>
      <ModalWrapper/>
    </div>
  )
}

export default App