import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  const token = localStorage.getItem('token');
  if(token !== null){
    return <Outlet />
  }else{
    return (<Navigate to={'/login'}/>);
  }
}

export default ProtectedRoute;