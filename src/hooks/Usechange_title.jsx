import React,{useEffect} from 'react'

const Usechange_title = ({titles}) => {

     useEffect(()=>{
        const title=document.title
        document.title=titles
        
        return ()=>{
          document.title=title
        }
      },[titles])
    


}

export default Usechange_title