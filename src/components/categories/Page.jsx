import React,{useState,useEffect,Suspense,useRef} from 'react'
import img1 from "../../assets/img/com.jpeg"
import img2 from "../../assets/img/head.jpeg"
import img3 from "../../assets/img/shoes.jpeg"
import img4 from "../../assets/img/Baseball_Cap.jpeg"
import img5 from "../../assets/img/Bakhtiar_Red_Hand_cappet.jpeg"
import img6 from "../../assets/img/Dell_Pocket_laptop.jpeg"
import img7 from "../../assets/img/iwatch.jpeg"
import img8 from "../../assets/img/iPhone12.jpeg"
import img9 from "../../assets/img/rolex.jpeg"
import img10 from "../../assets/img/Gucci _Shoulder.jpeg"
import img11 from "../../assets/img/T_shirt.jpeg"
import img12 from "../../assets/img/PS5.jpeg"
import img13 from "../../assets/img/The Last of Us.jpeg"
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch,useSelector } from 'react-redux'
import { Add_card } from '../../features/funcSlice'
import { motion, useScroll, useTransform } from 'framer-motion';
import Theamess from '../../hooks/theame'
import { theame } from '../../features/funcSlice'

const Product_Com = () => {

    const {all}=Theamess()

    const dispatch=useDispatch()
    
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: ref,
    // offset: ['start 100%', 'end 1%'], // [enter viewport, leave viewport]

  });


    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const [product,setproduct]=useState([
        {
            id:0,
            img:img1,
            name:"apple electronics",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:1,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:2,
            img:img3,
            name:"Shoes",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:3,
            img:img4,
            name:"Baseball Cap",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,

            price:1000  ,
            color:"white",

        },
        {
            id:4,
            img:img5,
            name:"Bakhtiar Red Hand cappet",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            price:20000,  
            quantity:1,
            color:"white",

        },
        {
            id:5,
            img:img6,
            name:"Dell_Pocket_laptop",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            color:"white",
            price:15000  

        },
        {
            id:6,
            img:img7,
            name:"iwatch",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            color:"white",
            price:30000  
        },
        {
            id:230,
            img:img8,
            name:"iPhone12",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:40000  
        },
        {
            id:331,
            img:img9,
            name:"rolex",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            color:"white",
            price:120000  
        },
        {
            id:32,
            img:img10,
            name:"Gucci Shoulder",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            color:"white",
            price:145000  
        },
        {
            id:33,
            img:img11,
            name:"T shirt",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            color:"white",
            price:12000  
        },
        {
            id:34,
            img:img12,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            price:1000,  
            color:"white",

            quantity:1,
        },
        {
            id:35,
            img:img13,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:36,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:10,
            img:img1,
            name:"TV",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:21,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:22,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
        {
            id:23,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,

            price:1000  ,
            color:"white",

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
            price:1000  ,
            color:"white",

        },
        {
            id:26,
            img:img2,
            name:"Headphone",
            title:"Lorem ipsum dolor sit amet  consectetur adipisicing elit.Ab a ",
            quantity:1,
            price:1000  ,
            color:"white",

        },
    ])

    const content=(
      
        <Suspense fallback={<p>loading....</p>}>
            {product.slice(0,10).map(res=>(
                  <div
                  style={all}
                //   ref={ref}
                  className='product_con'
                //   style={{
                //     scale,
                //     opacity,
                //   }}

                  key={res.id}
                >
                {/* <div className='product_con'> */}

                <img src={res?.img} width={"100%"} height={"200px"}/>
                <div className="prices">

                <h2>{res.name}</h2>
                <span>{res?.title ?`${res.title.substring(0,30)}....`:res?.title}</span>
                <h3>₦{res?.price}</h3>
                </div>
                <div className="shops">

                <FaShoppingCart className='cs' onClick={()=> dispatch(Add_card(res))}/>
                </div>
                {/* </div> */}
            </div>
            ))}
        </Suspense>

    )

  return (
    <section className='Products' style={all}>
        <div className="child_pro" style={all}>
        {/* 
    <div className="explore">
        <div className="explore1">

    <div className="product_head">

        <h4>Discover</h4>
        <h3>Products</h3>
        <h2>Explore Our diverse range of Quality products today!</h2>
    </div>
        </div>
        <div className="explore2">
            <button className='View_all'>View All</button>
        </div>
    </div> */}
    <main className="Product" style={all}>
        {content}
    </main>
    
    </div>
<br />
<br />
    </section>

  )
}

export default Product_Com