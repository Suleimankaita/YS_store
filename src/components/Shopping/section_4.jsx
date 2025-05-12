import { useState } from "react"
import React from 'react'
import img from "../../assets/img/sl.webp"
import {FaStar} from "react-icons/fa"
import Theamess from "../../hooks/theame"
const Section_4 = () => {

    const {all}=Theamess()


    const [testimonials,setTestimonials]=useState([
        {
            id:0,
            name:"suleiman",
            img:img,
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam?",
            stars:<FaStar/>,
            com:["as com","gjs com"]

        },
        {
            id:1,
            name:"Yusuf",
            img:img,
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam?",
            stars:<FaStar/>,
            com:["as com","gjs com"]

        },
        {
            id:2,
            name:"Kaita",
            img:img,
            body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam?",
            stars:<FaStar/>,
            com:["as global","gjs company"]
        }
    ])

    const contents=testimonials.map(res=>(
        <div className="msw" key={res.id}>
            
            <span className="starts" style={{color:"rgb(220, 223, 39)"}}>{res.stars}</span>
            <span className="starts" style={{color:"rgb(220, 223, 39)"}}>{res.stars}</span>
            <span className="starts" style={{color:"rgb(220, 223, 39)"}}>{res.stars}</span>
            <span className="starts" style={{color:"rgb(220, 223, 39)"}}>{res.stars}</span>
            <p>{res.body}</p>
            <br />
            <div className="com_img">

            <img src={res.img} width={"100px"} height={"100px"} alt={res.name}  />
                <p>Name:{res.name}</p>
                <p>postion:{res.com.toString().replace(" , ").replaceAll(" , ")}</p>
            </div>

           
        </div>
    ))

  return (
    <section className='section_4' style={all}>
        <div className="sec_4">
            <h1>Customer testimonials</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, aperiam?</p>
        </div>
    <br /><br /><br /><br /><br />
        <div className="testiominals">
        {contents}
        </div>
    <br /><br /><br /><br /><br />
{/* 
        <div className="update_com">
            <div className="msq">
        <h1>Stay Updated With Our NewsLetter</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem expedita non!</p>
            </div>
</div> */}
    </section>
  )
}

export default Section_4