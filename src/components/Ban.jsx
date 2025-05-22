import React,{Suspense} from 'react'
import img1 from "../assets/img/shoes.jpeg"
import img2 from "../assets/img/com.jpeg"
import img3 from "../assets/img/cloth.jpeg"
import { Link } from 'react-router-dom';
import Theamess from '../hooks/theame';
const Ban = () => {

  const {all}=Theamess()
  const items=[
    {
      id:0,
      img:img1,
      name:"Shoes",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
    {
      id:1,
      img:img2,
      name:"electronics",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
    {
      id:2,
      img:img3,
      name:"clothes",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",

    },
  ]


  const content=items.map(res=>(
    <Link style={all} to={`All categories/${res.name}`}  className="feature_con " key={res.id} >
      <div className="ims" style={{backgroundImage:`url(${res.img})`}}>

    <h1>{res.name}</h1>
    <p>{res.des}</p>
      </div>
    </Link>
  ))

  return (
    <section className='feature' style={all}>
    <div className="note" style={all}>

    <h3>innovative</h3>
    <h1>Discover Our Product <br /> Features Today</h1>
    <p>Our product are designed with cutting-edge technology to enhance your experience. <br/> <span className='sps'> Enjoy unparralleled quality and performance tht sets us apart from the competition </span></p>
    </div>

    <div className="feature_child" style={all}>
      <Suspense fallback={<p>Loading....</p>}>
      {content}
      </Suspense>
    </div>
      <div className="btn_feature" >
        <button>Learn More</button>
        <button>Sign Up</button>
      </div>
    </section>
  )
}

export default Ban

