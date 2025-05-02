import React from 'react'
import H from './H'
import Headers from './headers'
import { Outlet } from 'react-router-dom'
const child_layout = () => {
  return (
    <div className='child_layout'>
        <Headers/>
{/* <H/> */}
        <Outlet/>
        </div>
  )
}

export default child_layout