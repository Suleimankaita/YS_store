import React,{useEffect,useState} from 'react'
import { theame } from "../features/funcSlice";
import { useSelector } from 'react-redux';
const Theamess = () => {
      
      const theames=useSelector(theame);
      const [theamem,settheamem]=useState()
      const style={
        backgroundColor:" rgb(54, 54, 54)",
        color:"whitesmoke"
    }
      useEffect(()=>{
        
        if(theames){
            // document.getElementsByName("body").classList.add("darks")
            document.body.className="dark"

        }
        else{
            document.body.style=null
        }
      },[theames])
      
        

        const all=theames?style:null
    return {all};
}

export default Theamess