import React, { useEffect, useState,useRef } from "react";
import { Outlet,NavLink } from "react-router-dom";
import { FaShoppingCart,FaLessThan, FaArrowCircleLeft, FaBars } from "react-icons/fa";
import Nav from "./Nav";
import { useSelector,useDispatch } from "react-redux";
import { Suspense } from "react";
import { carts } from "../features/funcSlice";
import { FaTimes ,FaTrashAlt,FaSun,FaMoon} from "react-icons/fa";
import { dec ,Add_card,deleteAll,dele} from "../features/funcSlice";
import Fotter from "./Fotter"
import logo from "../assets/img/logo1.png"
import { useNavigate,useLocation ,useParams} from "react-router-dom";
import { changetheame,theame } from "../features/funcSlice";
import theamess from "../hooks/theame";
import Search from "./Search";
import { transform } from "framer-motion";
import { BiHomeAlt,BiCategoryAlt,BiPhone,BiDoorOpen,BiCaretRight,BiCog} from 'react-icons/bi';


const Layouts = () => {

  const [activeSearch,setactiveSearch]=useState(false)
  const {id}=useParams()
  const select=useSelector(carts)
  const [scrolled, setScrolled] = useState(false);
  const [product, setproduct] = useState(select);
  const ref=useRef()
  const disp=useDispatch()
  const navigate=useNavigate()
  const loc=useLocation()
  const [back,setback]=useState(null)
  const [path,setpath]=useState(null)
  const bck=()=>navigate(-1)
  const theames=useSelector(theame);
  const ref_nav=useRef(null)
  
  const changes=()=>disp(changetheame())

  useEffect(()=>{
    const {pathname} =loc
    setpath(pathname)
    // if(pathname!=="/"){
    //   setback(<p onClick={bck} style={{fontSize:'15px',cursor:"pointer"}}><FaLessThan /> Back</p> )
    // }

  },[loc])

  const {all}=theamess()



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
        ref.current.classList.remove("view")


      } else {
        setScrolled(false);
        if(ref.current) {

          ref.current.classList.add("view")
        }
      }
    };



    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const show=()=>{
    ref.current.classList.toggle("show")
  }

  const amounts=select.reduce((acc, item) => acc + item.price * item.quantity,0);


  return (
    <main style={all}>
      {/* <Nav  ref_nav={ref_nav}/> */}

    <section style={all} ref={ref} className={"Cart"}>
    <div className="times" style={{display:"flex",justifyContent:"flex-end"}}>
    <FaTimes className="Tm" onClick={show}/>
    </div>
<Nav/>
        
    
      </section>

      <header style={theames&&scrolled||path===`/Home/${id}`||path===`/cart`&&!scrolled?all:null} className={ `${path===`/Home/${id}`||path===`/cart`?"scrolled":"header"} ${scrolled? "scrolled" :"header" } ` }>
      {/* <div style={path=="/Home"?{display:"none"}:{display:"flex"}} className="back">

       <li style={{transform:"translate(-10px,-5px)"}}>{back}</li> 
      </div> */}

<FaBars className="bars" onClick={show}/>

        <img src={logo} alt="" width={"50px"} height={"50px"} style={{borderRadius:"50%",marginLeft:"10px",}} />
      
        <li className="shoping_card nons"  style={{marginRight:"10px"}}>    
                          
        <NavLink to="/cart">
                          <div className="crd"  >

                      <span  className='count'>{select.length}</span>
                          </div>
                      <FaShoppingCart  fontSize={20} color='rgb(49, 137, 253)'/>

                  </NavLink>
                      </li>
                      <li className="desk"><Search/></li>
                      
                      <li>
                    {theames?<FaSun onClick={changes} />:<FaMoon onClick={changes} />}
                  </li>
                      <li className="mob"><Search/></li>
       <nav style={theames&&window.innerWidth<=900?all:null}>

        <ul >
           {/* <li>All Categories</li> */}
          <NavLink  className="nons"><BiCog/> <li className="nons">Settings</li></NavLink> 
                          <NavLink  className="nons"><BiCategoryAlt/><li> All Categories</li></NavLink>
         <NavLink className="nons" to="/"><BiHomeAlt/> <li>Home</li></NavLink>
           
         <NavLink  className="nons"> <BiPhone/>  <li className="ca">Elcectronics</li> 
         </NavLink>
                <div className="sws">
                  <li className="shoping_card cas "
                  
                   style={path==="/Company"?{display:"none"}:path==="/Shopping%20mall"?{display:"none"}:{display:"flex"}} 
                  >    
                  <NavLink to="/cart">
                          <div className="crd"  >

                      <span  className='count'>{select.length}</span>
                          </div>
                      <FaShoppingCart  fontSize={20} color='rgb(49, 137, 253)'/>

                  </NavLink>        
                      </li>
                      
                  </div>        

                  

        </ul>
       </nav>
      </header>
      <Outlet />
      <Fotter  />
    </main>
  );
};

export default Layouts;
