import React from "react";
import {Outlet, Navigate} from 'react-router-dom'

const useAuth = ()=>{
    const user = localStorage.getItem('user')
    return (user)
}
const ProtectedRoutes =()=>{
    const isAuth = useAuth()
    return (isAuth ? <Outlet/>:<Navigate to='/login'/>)
}
export default ProtectedRoutes