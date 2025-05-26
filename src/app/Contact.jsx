import React from 'react'
import {BiEnvelope,BiPhone,BiSolidEditLocation,BiRightArrow,BiDownArrow} from "react-icons/bi"
import { useState } from 'react'
import Theamess from '../hooks/theame'
import constt from "../assets/img/Contact_US.jpg"
const Contact = () => {
  const [open,setopen]=useState(false)
  const {all}=Theamess()
  const alls=[{
    name:"skleima",
  },
  {
    name:"yusuf"
  }
]

  const address=(
    <div style={{height:"50vh"}}>

    <address>
      <p>Katsina state</p>
      <dd>Near barhim esatate Katsina</dd>
    </address>
    <br />
    <iframe  src="https://maps.google.com/maps?q=katsina+barhim&output=embed" 
    loading="lazy" allowfullscreen
    frameborder="0" style={{width:"80%", height:"50vh", position:"absolute"}} ></iframe>
   
   
    </div>
  
  )

  return (
    <section className='contact_us' style={all}>
        <div className="tag_line">

        <h3>Tagline</h3>
        <h1>Contact US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.</p>
        </div>
        <div className="contacts">
            <div className="const">

    <span className="enve"><BiEnvelope/></span>
    <p>Emails</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>example@youremail.com</p>
    <br />
    <span className="enve"><BiPhone/></span>
    <p>Phone</p>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>+23470832242</p>
    <br />
    <span className="enve"><BiSolidEditLocation/></span>
    <p>Phone</p>
    <p>Lorem ipsum dolor sit amet.</p>
    
    <p>Get Drection <span onClick={()=>setopen(prev=>!prev)}>
      
      {open?<BiDownArrow/>:<BiRightArrow/>}</span></p>
      <div>{open?address:""}</div>
            </div>

<div className="contact_img" style={all}>
    <img src={constt} width={"70%"} height={"100%"} />

</div>
        </div>
    </section>
  )
}

export default Contact