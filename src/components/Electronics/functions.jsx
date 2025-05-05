import React,{useState} from 'react'
import Component from './component'
import img1 from "../../assets/img/com.jpeg"
import img2 from "../../assets/img/head.jpeg"
import { Link } from 'react-router-dom'

const Functions = () => {
  
      const [product,setproduct]=useState([
          {
              id:0,
              img:img1,
              name:"TV",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:1,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:2,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:3,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
  
              price:1000  
          },
          {
              id:4,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              price:1000,  
              quantity:1,
          },
          {
              id:5,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:6,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:230,
              img:img1,
              name:"TV",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:331,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:32,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:33,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
  
              price:1000  
          },
          {
              id:34,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              price:1000,  
              quantity:1,
          },
          {
              id:35,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:36,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:10,
              img:img1,
              name:"TV",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:21,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:22,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:23,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
  
              price:1000  
          },
          {
              id:24,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              price:1000,  
              quantity:1,
          },
          {
              id:25,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
          {
              id:26,
              img:img2,
              name:"Headphone",
              title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
              quantity:1,
              price:1000  
          },
      ])
  
  return (
  <>
  <Component product={product} />
  </>
)
}

export default Functions