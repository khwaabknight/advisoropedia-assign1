import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


function OpenRoute() {
    const token = localStorage.getItem('token');
    if(token !== null){
        return <Navigate to={'/'} />
    }else{
        return <Outlet />
    }
}

export default OpenRoute