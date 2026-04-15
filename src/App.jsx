import React, { useEffect } from 'react'
import Login from "/src/components/Auth/Login"
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { getLocalStorage } from './utils/localStorage'
const App = () => {

    useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)


  return (
     <Login />
    // <EmployeeDashboard/>
    // <AdminDashboard/>
  )
}

export default App