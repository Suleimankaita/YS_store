import React from 'react'
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './section_4'
import Contact from '../../../app/Contact'
import Usechange_title from '../../../hooks/Usechange_title'
const Page = () => {
  Usechange_title({titles:"Company"})

  return (
    <article className='Company'>
        <Section_1/>
        <Section_2/>
        <Section_3/>
        <Section_4/>
        <Contact/>
    </article>
  )
}

export default Page