import React, { useEffect, useState,useRef } from "react";
import { Outlet } from "react-router-dom";
import { FaShoppingCart,FaLessThan } from "react-icons/fa";
import Nav from "./Nav";
import { useSelector,useDispatch } from "react-redux";
import { Suspense } from "react";
import { carts } from "../features/funcSlice";
import { FaTimes ,FaTrashAlt} from "react-icons/fa";
import { dec ,Add_card,deleteAll,dele} from "../features/funcSlice";
import Fotter from "./Fotter"
import logo from "../assets/img/logo1.png"
import { useNavigate,useLocation ,useParams} from "react-router-dom";

const Layouts = () => {
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

  
  
  useEffect(()=>{
    const {pathname} =loc
    setpath(pathname)
    // if(pathname!=="/"){
    //   setback(<p onClick={bck} style={{fontSize:'15px',cursor:"pointer"}}><FaLessThan /> Back</p> )
    // }

  },[loc])

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
    <>
    
    <section ref={ref} className={'Cart'}>
    <div className="times">
    <FaTimes className="Tm" onClick={show}/>
    </div>
      <h1>&#8358;{Number(amounts).toLocaleString()}</h1>

{!select.length&&<p>Empty</p>}
      <div className="sl">

      {
       <Suspense fallback={<p>loading....</p>}>
       {select.map(res=>(
           <div className='mem' key={res.id}>

           <img src={res?.img} width={"100%"} height={"70px"}/>
           <div className="store">
            <span>{res.name}</span>
            <span>₦{res?.price}</span>
           </div>
           <div className="prices2" >
           <button onClick={()=>disp(dec(res))}>-</button>
           <span className="quantity">{res?.quantity}</span>
           <button onClick={()=>disp(Add_card(res))} >+</button>
           </div>
           <div className="deletes">

           <button className="trash" onClick={()=>disp(dele(res))}><FaTrashAlt/></button>
           </div>
           

           </div>
       ))}
   </Suspense> 
      }
      </div>

      <br /><br /><br /><br /><br />
      <div className="check">

      <button onClick={()=>alert("payments")}>pay</button>
      <button onClick={()=>disp(deleteAll())}>Delete All</button>
      </div>
      </section>

      <header className={`${path===`/Home/${id}`?"scrolled":"header"} ${scrolled ? "scrolled" : "header"}`}>
      {/* <div style={path=="/Home"?{display:"none"}:{display:"flex"}} className="back">

       <li style={{transform:"translate(-10px,-5px)"}}>{back}</li> 
      </div> */}
        <img src={logo} alt="" width={"50px"} height={"50px"} style={{borderRadius:"50%",marginLeft:"10px"}} />
        <li className="shoping_card nons" onClick={show} style={{marginRight:"10px"}}>    
                          
                          <div className="crd">

                      <span className='count'>{select.length}</span>
                          </div>
                      <FaShoppingCart fontSize={20} color='rgb(49, 137, 253)'/>

                      </li>
       <nav>

        <ul>
          <li>Home</li>
          <li className="cas">search</li>
          <li>All Categories</li>
          <li>Settings</li>
          <li className="cas">Elcectronics</li>

                <div className="sws">
                  <li className="shoping_card cas "
                   style={path==="/Company"?{display:"none"}:path==="/Shopping%20mall"?{display:"none"}:{display:"flex"}} onClick={show}
                  >    
                          
                          <div className="crd"  >

                      <span  className='count'>{select.length}</span>
                          </div>
                      <FaShoppingCart  fontSize={20} color='rgb(49, 137, 253)'/>

                      </li>
                  </div>        

        </ul>
       </nav>
      </header>
      <Outlet />
      <Fotter />
    </>
  );
};

export default Layouts;
