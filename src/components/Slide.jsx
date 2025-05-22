import React,{useState,useEffect} from 'react'
import img from "../assets/img/Doc.jpeg"
import img1 from "../assets/img/shoes.jpeg"
import img2 from "../assets/img/abt.jpg"
import H from '../app/H'

const Slide = () => {

    const [arr,setarr]=useState([
        {
            name:"Your One-Stop Discount Destination",
            img:img,
            des:"Welcome to our eCommerce store – where shopping is simple, fast, and affordable! Enjoy smooth navigation, secure payments, and exciting discounts on your favorite products. Shop smarter, save more!"
        },
        {
            name:"Quality Products, Effortless Shopping",
            img:img1,
            des:"Discover a wide range of high-quality products tailored to your everyday needs — from fashion and electronics to home essentials and more. Our platform is designed for ease, speed, and comfort, with unbeatable discounts that help you save as you shop. Simple to use, secure, and always affordable — this is shopping the way it should be"
        },
        {
            name:"Grow Your Business with Us",
            img:img2,
            des:"Ready to take your business online? Open a company account on our platform and start showcasing your products to thousands of potential customers. Whether you're a small brand or a growing enterprise, our user-friendly dashboard makes it easy to upload, manage, and promote your products—plus enjoy exclusive seller tools and support. Join us today and watch your business thrive!"
        }
    ])
      const [index,setindex]=useState(0)
      
      useEffect(() => {
         const clear = setInterval(() => {
           setindex(prevIndex => (prevIndex + 1) % arr.length);
         }, 5000);
     
         return () => clearInterval(clear);
       }, []);
    
    
       const next =()=>{
        setindex(prevIndex => (prevIndex + 1) % arr.length);
       }
       const prev =()=>{
        setindex(prevIndex => (prevIndex - 1 + arr.length) % arr.length);
       
      }
    
    

  return (
    <>

    <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${index * 100}%)` }}>
        {arr.map((src, index) => (
          <div className="carousel-item" key={index}>
              {/* <img src={src.img} alt="" width={"200px"} /> */}
                <div className="sty">

                <h1>{src.name}</h1>
                <br />
                <p>{src.des}</p>
                <br />

                <button className='get_in'>Get In touch</button>
            </div>
            {/* <img src={src} alt="" width={"100%"}  height={"90%"} /> */}
          </div>
        ))}
      </div>
 <div className="carousel-controls">
        {/* <button className="carousel-control prev" onClick={prev}>&#10094;</button> */}
        {/* <button className="carousel-control next" onClick={next}>&#10095;</button> */}
      </div>
    
      </div>
</>
  )
}

export default Slide