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
import srcs  from "./scr";
import { transform } from "framer-motion";
import { BiHomeAlt,BiCategoryAlt,BiPhone,BiDoorOpen,BiCaretRight,BiCog,BiSolidUniversalAccess} from 'react-icons/bi';
import arr from "../hooks/arr";
import { toast, ToastContainer } from "react-toastify";

const Layouts = () => {

  const {src,classnames}=srcs()

  const [search,setSearch]=useState("")
  const {id}=useParams()
  const select=useSelector(carts)
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
  const [arrs,setarrs]=useState([])  
  const changes=()=>disp(changetheame())

  
  const {all}=theamess()

  const search_btn=(e)=>{

    const ares=arr().filter(res=>{
    return res?.name.toLowerCase().includes(search.trim().toLowerCase())
  })
    if(search){

    setarrs(ares)
  }else if(!search){
    toast.error("search field can not be blank ")
    setarrs([])
    
  }
   if(!ares.length){
    toast.error("search not found ")
  //  return setarrs([])
  }

  };


  

  const show=()=>{
    ref.current.classList.toggle("show")
  }

  
  return (
    <main style={all}>
      {/* <Nav  ref_nav={ref_nav}/> */}

    <section style={all} ref={ref} className={"Cart"}>
    <div className="times" style={{display:"flex",justifyContent:"flex-end"}}>
    <FaTimes className="Tm" onClick={show}/>
    </div>
<Nav/>
        
    
      </section>

      <header style={src} className={classnames }>
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
                      <li className="desk"><Search {...{search,setSearch,search_btn}}/></li>
                      
                      <li>
                    {theames?<FaSun onClick={changes} />:<FaMoon onClick={changes} />}
                  </li>
                      <li className="mob"><Search {...{search,setSearch,search_btn}} /></li>
       <nav style={theames&&window.innerWidth<=900?all:null}>

        <ul style={all} >
           {/* <li>All Categories</li> */}
          <NavLink style={all} to="settings"  className="nons"><BiCog/> <li style={all}className="nons">Settings</li></NavLink> 
                          <NavLink style={all}  to={"All categories"} className="nons"><BiCategoryAlt/><li style={all}> All Categories</li></NavLink>
         <NavLink style={all} className="nons" to="/"><BiHomeAlt/> <li style={all}>Home</li></NavLink>
           
         <NavLink style={all} to={"electronics"} className="nons"> <BiPhone/>  <li style={all}className="ca">Elcectronics</li> 
         </NavLink>
                <div className="sws">
                  <li  className="shoping_card cas "
                  
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

      <ToastContainer/>
      {arrs.length?(
        <div className="Search_results">
        suleiman
        </div>):null
      
      }
      {!arrs.length&&
        <div style={arrs.length&&search===""?{display:"none"}:!arrs.length&&!search===""?{display:"none"}:{display:"none"}} className="Search_results">
        not fout
        </div>
       } 
      
      <Outlet />
      <Fotter  />
    </main>
  );
};

export default Layouts;
