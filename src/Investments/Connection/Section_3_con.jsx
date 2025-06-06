import React from 'react'
import { Link } from 'react-router-dom'
import { useRef,useState,useEffect } from 'react'
import { io } from 'socket.io-client'
import { useParams } from 'react-router-dom'

const Section_3_con = () => {
     const [id,setid]=useState('')
      const socket=useRef(null)
      let sk=Math.floor(Math.random()*1000)


      useEffect(()=>{
      if(!socket.current){
                socket.current=io('http://localhost:4000')
              }
     
            //  socket.current.off('connection').on('connection',(sock)=>{
            //      console.log(sock)
            //  })
            //  socket.current.emit('join-room',sk)
  
            //  socket.current.on('joina-room',(da)=>{
            //   console.log(da)
            //  })

             return()=>{

              //  socket.current.off('connection')
              //  socket.current.off('join-room')
             }
  
      },[socket.current])
  
  return (
  <article className='Section_6_inss2 '>
        <div className="blocks">
             <h2>Join Our Video call Room</h2>

            <p style={{width:"70%"}} >Exprience seamless communication with a free trial or schedule a demo session today!</p>
    <div className="btn_feature2">
        <button>Learn More</button>
        <button>
        <Link to={`Video_call/${sk}`}>
          Join
        </Link>
          </button>
      </div>
        </div>

        <div className="blocks_2">
        <div className="blockss4">
        </div>
        </div>
    </article>

  )
}

export default Section_3_con