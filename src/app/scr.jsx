import { useState,useEffect } from "react"
import { useLocation,useParams } from "react-router-dom"
import { theame } from "../features/funcSlice"
import React from 'react'
import { useSelector } from "react-redux"
import Theamess from "../hooks/theame"
const Scr = () => {
    const paths=useLocation()
    const theames=useSelector(theame)
    const {all}=Theamess()
    const {id}=useParams()
    const [path,setpath]=useState(null)
  const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setScrolled(true);
            // ref.current.classList.remove("view")
    
    
          } else {
            setScrolled(false);
            // if(ref.current) {
    
            //   ref.current.classList.add("view")
            // }
          }
        };
    
    
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
    
    
    useEffect(()=>{
        const {pathname} = paths
        setpath(pathname)
        // if(pathname!=="/"){
        //   setback(<p onClick={bck} style={{fontSize:'15px',cursor:"pointer"}}><FaLessThan /> Back</p> )
        // }
    
      },[paths])

        

     const src=theames&&scrolled||path===`/Home/${id}`||path===`/All%20categories`||path===`/cart` ||path==="Investment%20center"||
     path===`/Home/${id}`&&!scrolled?all:null 
    
     const classnames= `${path===`/cart`||path===`/Investment%20center`||path===`/All%20categories`?"scrolled":"header"} ${scrolled? "scrolled" :"header" } `
  return{src ,classnames}
}

export default Scr