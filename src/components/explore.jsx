import React from 'react'
import { useScroll,motion,useTransform } from 'framer-motion'
const Explore = () => {

  const {scrollYProgress}=useScroll()

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div className='explore'>

      <motion.div
    //  style={{

    //    opacity,
    //    scale,
    //   }}
      className="explore1">
        {/* <div className="explore1"> */}
            <h1>Elevate Your shopping Expeprinece With Us</h1>
        {/* </div> */}
        </motion.div>
        <div className="explore2">
        
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet reiciendis alias sapiente ipsum exercitationem id laudantium ducimus, neque in assumenda expedita voluptatibus autem odio vel eum temporibus minima non velit.</p>
            <div className="btn-explore">
                <button>Shop Now</button>
                <button>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Explore