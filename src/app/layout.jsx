import {Outlet} from "react-router-dom"
import { useLocation,Navigate } from "react-router-dom"
import React from 'react'

const layout = (...allowedRoles) => {

    const location = useLocation();

    const roles=['admin','user'];

  return roles.some(role=>allowedRoles.includes(role)) ? <Outlet/> : <Navigate to="/login" state={{from:location}} replace/>
    
    
  
}

export default layout