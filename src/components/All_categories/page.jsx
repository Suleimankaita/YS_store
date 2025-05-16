import React from 'react'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Theamess from '../../hooks/theame'

const page = () => {
  const {all}=Theamess()
  return (
    <article style={all} className='All_categories'>
      <div style={all} className="all_hero">
      <Section_1/>
      <Section_2/>
      </div>
    </article>
  )
}

export default page