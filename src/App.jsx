import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <div>
      <AppRoutes/>
      <ToastContainer/>
    </div>
  )
}

export default App