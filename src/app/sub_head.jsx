import React from 'react'
import { FaSearch } from 'react-icons/fa'
const sub_head = () => {
  return (
    <main classname="sub_head">   
        <input type="search" className='input' />
        <button className='search_btn'><FaSearch/></button>
    </main>   
  )
}

export default sub_head