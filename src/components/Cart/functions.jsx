import React,{useState,useEffect,Suspense} from 'react'
import { dele,save_like ,carts,card_checked,Add_card,dec,cart_allChecked ,deleteAll} from '../../features/funcSlice'
import { useSelector,useDispatch } from 'react-redux'
import {BiQrScan,BiHeart,BiTrash} from "react-icons/bi";
import empty from "../../assets/empty .jpg"
import { FaHeart } from 'react-icons/fa';
import Theamess from '../../hooks/theame';
const Functions = () => {
    const [countliki,setcountliki]=useState(0)
  const [liki,setliki]=useState(false)
  const [checked,setchecked]=useState(Boolean)
  const cart=useSelector(carts)
  const dips=useDispatch()  
  const [storelike,setstorelike]=useState(JSON.parse(localStorage.getItem("Like"))||[])
  
  const {all}=Theamess()

  const arr=[]


  useEffect(()=>{
    const check=cart.every(res=>res.checked)
    setchecked(check)
  },[])

  useEffect(()=>{
    dips(cart_allChecked(checked))
  },[checked])


  // const acc=
  const likis=(res)=>{
    dips(save_like(res))
    
}

   const unlikis=(id)=>{
        setliki(prev=>!prev)
        setcountliki(prev=>prev-=1)
       
    }

  const showUp=(
  
    <div className="cart_conx">
  
      <div className="ship_">
  
      </div>
  
  {cart.map(res=>{

    if(res?.checked){
      arr.push(res)
     }else{
      arr.filter(re=>re.id!==res?.id)
      // setaddcart(mas)
     }
  return(

  <div className='cart_element' key={res?.id}>
    
    
    <h4 style={!all?{textAlign:"start",color:"black"}:all}>shipping by YS store</h4>

    <div style={all} className="check_red">

<div className="im_in">

<input style={all} type="checkbox" name={res?.name} onChange={()=>{
  dips(card_checked(res))
  
}} checked={res?.checked} />
      
          <img src={res?.img} alt={res.name} height={"150px"} width={"90%"} />
</div>
      
      <div style={all} className="desc">

  <div style={all} className="pa">

  <p style={all}>{res?.title?.length>60?`${res?.title.substring(0,60)}.....`:res?.title}</p>
    <div className="all_li">
  <span style={{margin:5}}><BiQrScan className='fass'/></span>
  <span style={{margin:5}}>{res?.seen?<BiHeart  onClick={()=>likis(res)} className={res?.seen?"Likes_s":"hearts"}/>:<FaHeart onClick={()=>likis(res)}
                 style={{cursor:"pointer"}}
                className={!res?.seen?"Likes_s":"hearts"}
                color="tomato"/>}</span>
  <span style={{margin:5}}><BiTrash className='fass' onClick={()=>dips(dele(res))}/></span>
    </div>
  </div>
  <div className="store_name">
    <p>store name</p>
  </div>
  <div className="merge">

  <div className="gb">

  <div className="color_bg" style={all}>
    <span>{res?.color||"White"}</span>
  </div>
  <div className="fleq">

  <div className="prc">

    <span>₦{res?.price}</span>
    <strike>₦{res?.price*1.2}</strike>
  </div>
  <div className="buttons_gr">

      <button onClick={()=>dips(dec(res))}>-</button>
      <span>{res?.quantity}</span>
      <button onClick={()=> dips (Add_card(res))}>+</button>
  </div>
  </div>


  </div>
  
  </div>
      </div>
</div>
      </div>

    )})}
    </div>
  )



  return (
  <>
  {cart.length?(

  
    <main style={all} className="main_cart"> 
      <div style={all} className="block_cart">

      <div style={!all?{color:"black"}:all} className="cart_length">
      <h2 style={{marginBottom:"10px"}}>Cart{`(${cart.length})`}</h2>
    <label htmlFor="select_all">select all items</label>
      <input type="checkbox" id="select_all" checked={checked} onChange={()=>{
        setchecked(prev=>!prev)
      }}  />
      </div>
      {showUp}
      </div>
    
    <div style={all} className="yt">

    <div style={all} className="boder_cart2">
                  
                {arr.length?(
                  <>
                  
                  
                    <div style={all} className="prices_Cart">

                      <h2>Summary</h2>
     
           
                </div>
                <div className="cart_imgs">
      {
      arr.map(res=>
        <div key={res?.id} className="check_img">
          <div className="check_good"></div>
        <img style={{margin:"1px"}} src={res?.img} alt={res.name}  width={"100px"} height={"100px"} />
        </div>
      )}
      </div>
     
                <div style={all} className="item_total">
      <h3>items total</h3>
      <h3>₦{Number(arr.reduce((sum,prev)=>sum+prev.price*prev.quantity,0)).toLocaleString()}</h3>
     </div>
                <div style={all} className="item_total">
      <h3>Shipping Cost</h3>
      <h3>₦{Number(arr.reduce((sum,prev)=>sum+prev.price*prev.quantity/2,0)).toLocaleString()}</h3>

     </div>
                <div style={all} className="btn_cart">
                    <button className='btn_cart1'>proceed to checkout</button>
                    <button onClick={()=>dips(deleteAll())} className='btn_cart2'>Delete All items</button>
                </div>
                </>
                  ):(
                    <div style={{textAlign:"center",marginTop:"20px",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",alignItems:"center"}}>
                      
                      <h2>your cart is empty</h2>
                      <p>add items to your cart</p>
                    </div>
                  )}
                </div>
                </div>
    </main>
    ):(
      <div style={{textAlign:"center",marginTop:"20px",display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",alignItems:"center"}}>
                      <img src={empty} alt="" height={"50%"} width={"100%"} />
                      <h2>your cart is empty</h2>
                      <p>add items to your cart</p>
                    </div>
    )}
  </>
  )
}

export default Functions