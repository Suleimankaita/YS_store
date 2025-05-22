import React from 'react'
import img from "../assets/404.JPG"
// import { Simple404 } from "@404pagez/react";
const Not_found = () => {
  return (
    <main className='not_found' style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%",height:"100vh"}}>
      <div className="lopq"  style={{backgroundImage:`url(${img})`,backgroundPosition:"center",width:"100%",height:"90%"
    ,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>

      </div>
    {/* <h1>Not_found</h1> */}
    {/* <Simple404 size={20} isButton={false} /> */}
    </main>
  )
}

export default Not_found