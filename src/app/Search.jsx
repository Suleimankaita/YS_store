import React,{useState,useEffect} from 'react'
import Product_Com from '../components/product_Com'
import Theamess from '../hooks/theame'
const Search = ({search,setsearch}) => {
    const {all}=Theamess()
{/* <Product_Com search={search}/> */}
  return (
    <div className='Search_cons'>
        <input style={all} placeholder='Seaarch' className='search' type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
    </div>
  )
}

export default Search