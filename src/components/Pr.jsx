import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/img/company.jpeg"
import img2 from "../assets/img/mall.jpeg"
import img3 from "../assets/img/ecom.jpeg"
import Theamess from '../hooks/theame'
const pr = () => {

  const {all}=Theamess()
  const items=[
    {
      id:0,
      img:img1,
      name:"Company",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
    {
      id:1,
      img:img2,
      name:"Shopping mall",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
    {
      id:2,
      img:img3,
      name:"Sell TO YS store",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
  ]


  const content=items.map(res=>(
    <Link to={res.name} className="feature_con " key={res.id} >
      <div className="ims" style={{color:"hsl(0, 0.00%, 100.00%)",backgroundImage:`url(${res.img})`}}>

    <h1>{res.name}</h1>
    <p>{res.des}</p>
      </div>
    </Link>
  ))

  return (
    <section className='feature2' style={all}>
    <div className="note2" style={all}>

        <div className="explore1" style={all}>

    <h3>Services</h3>

    <h1>Discover Our Comprehensive  Services Offering </h1>
        </div>
        <div className="explore2" style={all}>


    <p>We provide a range of services designed to elevate your business. from eCommerce solutions to digital marketing strategies, our team is dedicated to helping you scced. let us patner with you to turn your vision into reality</p>

    </div>
    </div>

    

    <div className="feature_child" style={all}>
      {content}
    </div>
      <div className="btn_feature" style={all}>
        <button>Learn More</button>
        <button>Sign Up</button>
      </div>
    </section>
  )
}

export default pr

