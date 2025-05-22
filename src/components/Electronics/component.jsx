import React,{useState,useEffect,Suspense,useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Add_card } from '../../features/funcSlice'
import { FaShoppingCart } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Theamess from '../../hooks/theame';
const Component = ({product}) => {
const {all}=Theamess()
  useEffect(()=>{
    console.log(product)
  },[])
  const dispatch=useDispatch()


      const content=(
        
          <Suspense fallback={<p>loading....</p>}>
              {product.map(res=>(
                 <Link to={`/Home/${res.id}`} style={all}
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
                                 {/* <div className="shops">
                 
                                 <FaShoppingCart className='cs' onClick={()=> dispatch(Add_card(res))}/>
                                 </div> */}
                                 {/* </div> */}
                             </Link>
              ))}
          </Suspense>
  
      );

  return (
  <section className='Products' style={all}>
        <div className="child_pro" >
    <div className="explore" style={all}>
        <div className="explore1" style={all}>

    <div className="product_head" style={all}>

        <h4>Discover</h4>
        <h3>Products</h3>
        <h2>Explore Our diverse range of Quality products today!</h2>
    </div>
        </div >
        {/* <div className="explore2">
            <button className='View_all'>View All</button>
        </div> */}
    </div>
    <main style={all} className="Product">
        {content}
    </main>
    
    </div>
<br />
<br />
    </section>
  )
}

export default Component