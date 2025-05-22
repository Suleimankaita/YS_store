import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Item_section_1 from './item_section_1'
const Page = () => {

    const {id}=useParams()

    useEffect(()=>{
        
        console.log(id)

    },[])

  return (
    
    <section className="Item_section">
    <Item_section_1/>
    </section>
  
)
}

export default Page