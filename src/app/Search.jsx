import React,{useState,useEffect} from 'react'
import Product_Com from '../components/product_Com'
import Theamess from '../hooks/theame'
import { FaSearch } from 'react-icons/fa'
const Search = ({search,setSearch,search_btn}) => {
    const {all}=Theamess()
{/* <Product_Com search={search}/> */}

  return (
    <form onSubmit={(e)=>e.preventDefault()} className='Search_cons'>
        <input style={all} placeholder='Search' className='search' type="search" value={search} onInput={(e)=>setSearch(e.target.value)} />
        <button onClick={search_btn}><FaSearch/></button>
    </form>
  )
}

export default Search