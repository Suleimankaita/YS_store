import React,{useState,useRef,useEffect} from 'react'

const S = () => {

    const video=useRef(null)
    
    useEffect(()=>{

        const mn=async()=>{

           const m=await navigator.mediaDevices.getUserMedia({video:true,audio:true})
           video.current.srcObject=m
        }
        mn()
        
    },[])

  return (
    <div>
        <video autoPlay playsInline ref={video} width={"200px"} height={"200px"}></video>
    </div>
  )
}

export default S