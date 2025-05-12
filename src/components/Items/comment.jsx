import React,{useEffect, useState} from 'react'
import { FaTimes } from 'react-icons/fa'
// import { Icons, ToastContainer,toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setcom } from '../../features/funcSlice';
import img from "../../assets/img/shoes.jpeg"
import { FaArrowUp } from 'react-icons/fa';
import { FaImages,FaEllipsisV } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaHeart,FaRegSave } from "react-icons/fa"
import { BiHeart as Heart,BiSave as Save,BiMessage,BiComment } from "react-icons/bi"
import { div } from '@tensorflow/tfjs';
import Theamess from '../../hooks/theame';
import {formatDistanceToNow,parseISO} from "date-fns"

const Comment = ({comfunc,toast}) => {

  const {all}=Theamess()

  const [arr,setarr]=useState([
    {
      id:0,
      name:"suleiman",
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae pariatur assumenda impedit consequatur rerum sed! Esse, ut? Alias, consequuntur?",
      like:4,
      seen:false,
      datetime:new Date().toISOString()

    },
    {
      id:1,
      name:"yusuf",
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae pariatur assumenda impedit consequatur rerum sed! Esse, ut? Alias, consequuntur?",
      like:10,
      seen:false,
      datetime:new Date().toISOString()


    },
    {
      id:2,
      name:"yusuf",
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae pariatur assumenda impedit consequatur rerum sed! Esse, ut? Alias, consequuntur?",
      like:3000,
      seen:false,
      datetime:new Date().toISOString()


    },
    {
      id:3,
      name:"yusufs",
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae pariatur assumenda impedit consequatur rerum sed! Esse, ut? Alias, consequuntur?",
      like:1000000,
      seen:false,
      datetime:new Date().toISOString()

    
    },

  ])
   const [liki,setliki]=useState(true)
      const [countliki,setcountliki]=useState(0)
      const likis=(id)=>{
          
        const find=arr.find(res=>res?.id===id)

        if(find){
          find.seen=!find.seen
          find.like+=1
          // setarr(prev=>([...prev,{like:like}]))
        }

        setliki(prev=>!prev)
          setcountliki(prev=>prev+=1)
          
      }
  
  
      const unlikis=(id)=>{
        const find=arr.find(res=>res?.id===id)

        if(find){
          find.seen=!find.seen
          find.like-=1
          // setarr(prev=>([...prev,{like:like}]))
        }
          setliki(prev=>!prev)
          setcountliki(prev=>prev-=1)
         
      }
 
 const likes=(
        <div style={all} className="likes">
            
            <div style={all} className="heart">

              {liki? <Heart
              
               onClick={likis} className={liki?"Likes_s":"hearts"}/>:<FaHeart onClick={()=>unlikis()}
               style={{cursor:"pointer"}}
              className={!liki?"Likes_s":"hearts"}
              color="tomato"/>}
              <span>{countliki}</span>
                {/* <BiMessage/> */}
            </div>

       
            
            
        </div>
    )

  const alerts = (id) => {
    Swal.fire({
      icon: "warning",
      iconColor: "red",
      title: "Delete Comment",
      text: "Are you sure you want to delete this comment?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      customClass: {
        title: "swal_title",
        confirmButton: "swal_btn",
        cancelButton: "swal_btn2"
      }
    }).then((res) => {
      if (res.isConfirmed) {
        setarr((prev) => prev.filter((re) => re.id !== id));
        toast.success("Comment deleted");
      } else {
        toast.error("Comment not deleted");
      }
    });
  };
  

  const [imgs,setimg]=useState('')  
  const [inp,setinp]=useState("")
  const [inp2,setinp2]=useState("")
  const disp=useDispatch()
  const comment=(
  <>
      {arr.length?(
  arr.map(res=>  {
    
    const format=parseISO(res?.datetime);
    const date=`${formatDistanceToNow(format)} ago`

    return(

    <div  className="user_com" key={res.id} style={all}>
      <div style={{display:"flex",justifyContent:"space-between",}}>

        <div className="prof">
    <img src={img} alt={res.name} width={50} height={50} style={{borderRadius:"50%"}} />
        <h4>{res.name}</h4>
        <span style={{transform:`translate(10px,12px)`,fontSize:"13px",}}>{date?date:null}</span>
      </div>
      <FaEllipsisV onClick={()=>alerts(res.id)} style={{cursor:"pointer"}}/>
        </div>
        {res?.img?<img style={{marginTop:"10px"}} src={res?.img} width={100} height={100}/> :null}
        
          <p>{res.title}</p>

        <br/>
        <br/>
        <div style={all} className="likes2">
            
            <div style={all} className="heart">

              {!res?.seen? <Heart

               onClick={()=>likis(res?.id)} className={res?.seen?"Likes_s":"hearts"}/>:<FaHeart onClick={()=>unlikis(res?.id)}
               style={{cursor:"pointer"}}
              className={res?.seen?"Likes_s":"hearts"}
              color="tomato"/>}
              <span>{res?.like>=1000&&res?.like<=99999?`${Number(res?.like).toLocaleString()}k`:res?.like>=1000000?`${Number(res?.like).toLocaleString()}m`:Number(res?.like).toLocaleString()}</span>
                {/* <BiMessage/> */}
            </div>

       
            
            
        </div>
          <br/>
    </div>
  
  )})
):(
     <div>
        <h1>No comment to display</h1>
    </div>
)}
    </>)



  useEffect(()=>{
    disp(setcom(arr.length))
  },[arr])

  const add=()=>{
    
    if(!inp.length){
      return toast.error("this field cant be blank")
    }else if(inp.length){
      const body={id:Math.random(),title:inp,name:"suleimans",like:0,img:imgs,datetime:new Date().toISOString()}
      
      const all=[...arr,body];
      setarr(all)
    }
    setinp('')

  }
  const add2=()=>{
    
    if(!inp2.length){
      return toast.error("this field can't be blank")
    }else if(inp2.length){
      const body={id:Math.random(),title:inp2,name:"suleimans",like:0,img:imgs,datetime:new Date().toISOString()}
      
      const all=[...arr,body];
      setarr(all)
    }
    setinp2('')
    setimg('')

  }



  return (
    <>
      {/* <ToastContainer/> */}
    
    <main className='comment_sections' style={all}>
        <div className="times2"><FaTimes className='close_com' onClick={comfunc}/></div> 
      <div className="comment_tabs">

        
        {comment}

      </div>
      <div className="com_text" style={all}>

      {!inp.length&&!imgs.length?(

      <>
      <textarea style={all} value={inp} onInput={(e)=>setinp(e.target.value)} className='comment_inp' name='comment' placeholder='write down your thogth on this product '></textarea>
        {inp?.length
        ?
        <button className='com_btns' onClick={add}><FaArrowUp/></button>: <label htmlFor='input' onChange={(e)=>setimg(URL.createObjectURL(e.target.files[0]))} className='com_btns' > <FaImages className='fa_icon'/> <input hidden accept='image/*' type="file" name="input" id="input" /> </label>
        
      }
      </>
      ):imgs.length&&!inp.length?(
        <main className='com_end' style={all}>
          <div className="times2"><FaTimes color='skyblue' className='close_com' onClick={()=>setimg("")}/></div>
            <img src={imgs} width={100} height={70} />
            <br />
            <textarea style={all} value={inp2} onInput={(e)=>setinp2(e.target.value)} className='comment_inp2' name='comment' placeholder='write down your thogth on this product '></textarea>
          {inp2?.length
          ?
          <button className='com_btn2' onClick={add2}><FaArrowUp/></button>:null}
        </main>
      ):(

        <>
        <textarea style={all} value={inp} onInput={(e)=>setinp(e.target.value)} className='comment_inp' name='comment' placeholder='write down your thogth on this product '></textarea>
          {inp?.length
          ?
          <button className='com_btns' onClick={add}><FaArrowUp/></button>: <label htmlFor='input' onChange={(e)=>setimg(URL.createObjectURL(e.target.files[0]))} className='com_btns' > <FaImages className='fa_icon'/> <input hidden type="file" name="input" id="input" /> </label>
          
        }
        </>
        )

    
  }
      </div>
    </main>
    </>
  
  )
}

export default Comment