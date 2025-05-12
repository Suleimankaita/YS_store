
import { useEffect, useState,useRef } from "react"
import React from 'react'
import img1 from "../../assets/img/cloth.jpeg"
import img2 from "../../assets/img/Dell_Pocket_laptop.jpeg"
import img3 from "../../assets/img/Doc.jpeg"
import img4 from "../../assets/img/PS5.jpeg"
import img5 from "../../assets/img/T_shirt.jpeg"
import img6 from "../../assets/img/The Last of Us.jpeg"
import {FaStar} from "react-icons/fa"
import { io } from "socket.io-client"
import { use } from "react"
import Product_Com from "../categories/Page"
import Usechange_title from "../../hooks/Usechange_title"
import { BiCurrentLocation} from "react-icons/bi"
import { useDispatch } from "react-redux"
import { Add_card } from "../../features/funcSlice"
import { FaHeart,FaBookmark as FaRegSave } from "react-icons/fa"
import { BiHeart as Heart,BiBookmark as Save,BiMessage,BiComment } from "react-icons/bi"
import { Icons, toast,ToastContainer } from "react-toastify"
import Swal from "sweetalert2"
import { commentss } from "../../features/funcSlice"
import Comment_section from "./comment"
import { useSelector } from "react-redux"
import Theamess from "../../hooks/theame"
const Item_section_1 = () => {
    const dispatch=useDispatch()
    const socket=useRef(null)
    const {all}=Theamess()
    const videos=useRef(null)
    Usechange_title({titles:"items"})
    const [comment,setcomment]=useState(false)
    const com_count=useSelector(commentss)
      useEffect(()=>{
        if(!socket.current) {
            socket.current=io("localhost:4000")
        }
        const socks=socket.current
        
        // const man=async()=>{
        //     const ms=await navigator.mediaDevices.getUserMedia({
        //         video:true,audio:false        
        //     })
        //     const conncetion=new RTCPeerConnection();
        //     // conncetion.
        //     videos.current.srcObject=ms
        //     socks.emit("video",videos)
        // }
    
        // man()

        

        socks.off("connection").on("connection",(sockets)=>{
            console.log(sockets)
        })
        
        return()=>{
            socks.off("connection")
            socks.on("disconnect")
        }

    },[])


    const [ms,setms]=useState("")

    const [items,setItems]=useState([
        {
            id:0,
            name:"PS5",
            img:img1,
            price:1000,
            color:"yellow",

        },
        {
            id:1,
            name:"PS5",
            img:img2,
            price:3000,
            // color:"green",
            color:"white"||"black",


        },
        {
            id:2,
            name:"PS5",
            img:img3,
            price:5000,
            // color:"red",
            color:"white"||"black",



        },
        {
            id:3,
            name:"PS5",
            img:img4,
            price:10004,
            color:"white"||"black",


        },
        {
            id:4,
            name:"PS5",
            img:img5,
            // color:"white",
            color:"white"||"black",

            price:2000

        },
        {
            id:5,
            name:"PS5",
            img:img6,
            color:"white"||"black",
            price:15000

        },
        
    ])

    const [available,setavailable]=useState(33)
    const [disavailable,setdisavailable]=useState(available)
    const re=items.filter(ress=>ress.color===ms?.color)

    const comfunc=()=>setcomment(prev=>!prev)

    const content=(
          

            re.map(res=>{
                return(
                <div onMouseEnter={()=>setms(res)} className="msa" key={res.id}>
                        <img src={res.img} alt={res.name} width={"70px"} height={"70px"} />
                </div>
            )})
            
        )

    const content2=(
        
        items.slice(0,3).map(res=>(
                <div style={{margin:"5px"}} onClick={()=>setms(res)} className="msa" key={res.id}>
                        <img src={res.img} alt={res.name} width={"70px"} height={"70px"} />
                </div>
            )) 
            
    )
    useEffect(()=>{
        setms(items[0])
    },[])
    useEffect(()=>{
        const re=items.filter(ress=>ress.color===ms?.color)
    },[ms])


    const [x,setX]=useState(0)
    const [Y,setY]=useState(50)

    const handlemouse=(e)=>{
        const {left,top,width,height}=e.target.getBoundingClientRect()
        const Xpos=(e.clientX - left) / width
        const Ypos=(e.clientY - top) / height
        setX(Xpos*100)
        setY(Ypos *100)

    }
    const mouse_out=()=>{
        setX(0)
        setY(50)

    }
   
    const [count,setcount]=useState(1);
    const [bolcheck,setbolcheck]=useState(false)

    const inc=()=>{
        setbolcheck(false)
        // new Swal({
        //     icon:"error",
        //     title:"yes man",
        //     text:"man of the people",
        //     showCancelButton:true,
        //     confirmButtonText:"Yes it is",
        //     cancelButtonText:"not"
        // })
        setcount(prev=>prev+=1)
        
    }
    const dec=()=>{
        setbolcheck(false)
        setcount(prev=>prev-=1)
        
    }

    useEffect(()=>{
        setdisavailable(available+count)||setdisavailable(available-count)
        if(count>=available){
        setbolcheck(true)

        }
    },[count])

  
    const btns=(
        <div className={"btn_parents"} style={all}>
            <button onClick={dec} disabled={count <=1}>-</button>
           
            <span>{count}</span>
            <button disabled={count ===available } onClick={inc}>+</button>
        </div>
    )

    const [liki,setliki]=useState(true)
    const [save,setsave]=useState(true)
    const [countliki,setcountliki]=useState(0)
    const [storelike,setstorelike]=useState(JSON.parse(localStorage.getItem("Like"))||[])
    const [countsave,setcountsave]=useState(storelike?.length)
    
    const likis=()=>{
        setliki(prev=>!prev)
        setcountliki(prev=>prev+=1)
        
    }


    const saveLocal=(saveto)=>{
        localStorage.setItem("Like",JSON.stringify(saveto))
    }

    const unlikis=(id)=>{
        setliki(prev=>!prev)
        setcountliki(prev=>prev-=1)
       
    }
    const saves=(id)=>{
        setsave(prev=>!prev)
        const savetos=[...storelike,ms]
        
        const find=storelike.find(item=>item.id===id)
        setcountsave(prev=>prev+=1)
        if(find){
            return
        }else{
            setstorelike(savetos)
            saveLocal(savetos)

        }

    }
    const unsaves=(id)=>{
        setsave(prev=>!prev)
        setcountsave(prev=>prev-=1)
        const omit=storelike.filter(item=>item?.id!==id)
        setstorelike(omit)
        saveLocal(omit)
    }
    useEffect(()=>{
        const find=storelike.find(item=>item.id===ms?.id)

        if(find){
            setsave(false)
            // setcountsave(prev=>prev+=1)
        
        }

    },[ms])

    const likes=(
        <div className="likes">
            
            <div className="heart">

              {liki? <Heart
              
               onClick={likis} className={liki?"Likes_s":"hearts"}/>:<FaHeart onClick={()=>unlikis(ms.id)}
               style={{cursor:"pointer"}}
              className={!liki?"Likes_s":"hearts"}
              color="tomato"/>}
              <span>{countliki}</span>
                {/* <BiMessage/> */}
            </div>

            <div className="heart">
            <BiComment onClick={comfunc} className="hearts"/>
            <span>{com_count}</span>
            </div>

            <div className="heart">
                
            {save?<Save className="hearts" onClick={()=>saves(ms?.id)}/>:<FaRegSave onClick={()=>{
                unsaves(ms?.id)
                }} color="gray" className="hearts"/>}
                <span>{countsave}</span>
            </div>
            
            
            
        </div>
    )

    const comments=comment?<Comment_section comfunc={comfunc} toast={toast} />:null



    return (
    <main className="item_con1" style={{position:"relative"}}>
        <ToastContainer/>

        <div className="item_con2" style={all}>

        <div className="mst" style={all}>


        <div className="block" style={all}>

        {content}
        </div>

        <div style={all} className="losa">
        <div onMouseLeave={mouse_out} onMouseMove={(e)=>handlemouse(e)} className="img_bg" style={{backgroundImage:`url(${ms.img})`, 
       backgroundPosition: `${x*1}px ${Y}%`, backgroundSize:"cover", backgroundRepeat:"no-repeat",    
        }}>
        </div>
        </div>
       


        </div>


        <div style={all} className="decr">
        {/* <div className="item_name"> */}
            {/* </div> */}
        <div className="item_descri ption">
                <h3>₦{Number(ms?.price).toLocaleString()}</h3>
                <h2>{ms?.name}</h2>
                
            {/* <div className="rates">
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            </div> */}
            

        </div>
            {/* <video ref={videos} autoPlay playsInline width={"100%"} height={"50vh"}></video> */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, doloremque impedit! Unde sequi, laudantium ipsa suscipit amet neque ipsam, a maxime autem veniam deserunt tempora, iste at laborum magni? Ipsum!</p>
            <br />
            <div className="flex_rates">

             <div className="rates">
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStar/>
            </div>
             <span>4.2</span> 
             <span>430 reviews</span>
             <span>|</span>
             <span>200+sold</span> 
            </div>
            <div className="block2">

{content}
</div>
            <br />
            <hr />
                <br />
            <h5>Color :{ms?.color}</h5>
                    <div className="flexs">
                        {content2}
                    </div>
            </div>

            <div style={all} className="boder_cart">
                <div className="prices_Cart">

            <h3>₦{Number(ms?.price*count).toLocaleString()}</h3>
                </div>

                <div style={all} className="cart_span">

                <p>Sold by</p>
                <p>YS store</p>
                </div>
                <br />
                <hr />
                <div className="cart_span">

                <p>Ship to</p>
                <p><BiCurrentLocation/>Nigeria</p>
                </div>
                <br />
                <hr />
                <br />
                <div className="cart_content">
                    <h5 style={{margin:"10px", fontSize:"16px"}}>Free shipping over ₦{Number((ms?.price* count )/5).toLocaleString()}</h5>
                    <p style={{margin:"10px"}}>Delivery on :{( new Date().toDateString() )}</p>
                    
                    <p style={{margin:"10px"}}>{"Available item "}{disavailable}</p>

                    {/* <h2>{ms?.name}</h2> */}
                </div>
                <hr />
            <br />
            <div className="stock_in">
                <h3>Quantity</h3>
                {btns}
            </div>
            <div className="like">
                {likes}
            </div>
            <div className="Cart_add">
                <button disabled={bolcheck} onClick={()=>{
                    setbolcheck(true)
                    dispatch(Add_card({...ms,quantity:count}))
                }
                    
            }>Add card</button>
                <button>Buy now</button>

            </div>
            </div>
        {comments}
        </div>


        {/* <img onMouseMove={(e)=>handlemouse(e)} src={ms.img} alt="" width={"50%"} height={"350px"} /> */}
        {/* <div className="block">
        {content2}
        </div> */}
       
        <Product_Com/>
    </main>
  )
}

export default Item_section_1