import React,{useState,useEffect} from 'react'
import Slide from "./Slide"
import Product from './Product'
import Ban from './Ban'
import Sli from './Sli'

import img from "../assets/img/custom.jpg"
const Home = () => {

  
 
  return (
    <div className='home'>
       <Slide/>
       <Sli  product={{
    discount: 25,
    image: img,
    title: 'Premium Noise Cancelling Headphones',
    currentPrice: '89.99',
    originalPrice: '119.99',
    rating: 4.5,
    reviewCount: '2,345',
    freeShipping: true,
    dealEndHours: 6 // 6 hour countdown
  }}/>
       {/* <Ban/> */}
       <Product/>
    </div>
  )
}

export default Home