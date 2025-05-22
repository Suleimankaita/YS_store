import React from 'react'
import Theamess from '../../hooks/theame'
import Functions from './functions'

const Page = () => {
  const {all}=Theamess()
  return(
    <main style={all} className='main_cart'>

    <Functions/>
    </main>
  )
}

export default Page