import Sub_head from './sub_head'
import {FaGlobe,FaShoppingCart,FaArrowDown,FaMoon,FaSun,FaArrowAltCircleDown,FaArrowAltCircleUp} from 'react-icons/fa'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



const Headers = () => {


    const [scrolled, setScrolled] = useState(false);
    const [theame, settheame] = useState(false);

    const changetheame=()=>settheame(prev=>!prev);

    useEffect(()=>{
      theame?document.body.className="light":document.body.className="dark"
    },[theame])

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const [show,setshow]=useState(<FaArrowAltCircleDown/>)


    return (
    <header>
        <div className="head1">
            <h1>YS store</h1>
           <Sub_head/>
           {/* <FaGlobe/> */}
            <div className="sings">
            
            {/* <h4>welcome</h4> */}
            <span className='h1'>welcome </span>
            <span>sign in </span>

            </div>

            <div className="shoping_card">
            <FaShoppingCart fontSize={20} color='rgb(49, 137, 253)'/>
            <div className="crd">
                
            <span className='count'>0</span>
            <span>cart</span>
            </div>
            </div>
        </div>

        <div className="head2">
            <div className="select"
             onMouseEnter={() => setshow(<FaArrowAltCircleDown/>)}  // Change state on hover
             onMouseLeave={() => setshow(<FaArrowAltCircleUp/>)} 
            >  
                All categories {show}
            <div className="ml">
            </div>
            </div>
            <nav>
                <ul>
                    <Link to='/'>
                    <li>home</li>
                    </Link>
                    <Link to={'/'}>
                    <li>History </li>
                    </Link>
                    <Link to={'/'}>
                    
                    <li>Notifications</li>
                    </Link>
                    <Link to={"/"}>
                    <li>Develivery</li>
                    </Link>
                    <Link to={'/'}>
                    <li>Settings</li>
                    </Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Headers