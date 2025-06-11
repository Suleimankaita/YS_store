import React from 'react'
import Section_chart1 from "./charts/Section_Chart"
import Employee from './charts/employee'
const Admin = () => {
  return (
    <section className='Admin'>
        <Section_chart1/>
        <Employee/>
    </section>
  )
}

export default Admin