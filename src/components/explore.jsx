import React from 'react'
import Theamess from '../hooks/theame'
import { useScroll,motion,useTransform } from 'framer-motion'
const Explore = () => {
const {all}=Theamess()
  const {scrollYProgress}=useScroll()

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div className='explore' style={all}>

      <div
    //  style={{

    //    opacity,
    //    scale,
    //   }}
    style={all}
      className="explore1">
        {/* <div className="explore1"> */}
            <h1>Elevate Your shopping Expeprinece With Us</h1>
        {/* </div> */}
        </div>
        <div className="explore2" style={all}>
        
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet reiciendis alias sapiente ipsum exercitationem id laudantium ducimus, neque in assumenda expedita voluptatibus autem odio vel eum temporibus minima non velit.</p>
            <div className="btn-explore" style={all}>
                <button>Shop Now</button>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Explore