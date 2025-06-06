import React,{useState,useEffect} from 'react'
import Product_Com from '../components/product_Com'
import Theamess from '../hooks/theame'
import { FaSearch } from 'react-icons/fa'
import { useLocation, useParams } from 'react-router-dom'
const Search = ({search,setSearch,search_btn}) => {
    const {all}=Theamess()
{/* <Product_Com search={search}/> */}

  const location=useLocation();
  const {pathname}=location;
  const {id}=useParams()
  return (
    <>
    {pathname===`/Investment%20center/connections/Video_call/${id}`?(
      <p>Video calling ....</p>
    
    ):(
      <form onSubmit={(e)=>e.preventDefault()} className='Search_cons'>
        <input style={all} placeholder='Search' className='search' type="search" value={search} onInput={(e)=>setSearch(e.target.value)} />
        <button onClick={search_btn}><FaSearch/></button>
    </form>
    )}
    </>
  )
}

export default Search