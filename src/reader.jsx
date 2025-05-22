// // import { useState,useEffect,useRef } from "react"
// // import React from 'react'
// // import { io } from "socket.io-client"

// // function Reader() {

// //     const ref=useRef(null)
// //     const socket=useRef(null)

// //     const [obj,setobj]=useState({
// //         like:10,
// //         cookie:0,
// //         share:0
// //     }
// //   )

// //   const [vide,setvideo]=useState()
  
// //   // const ref=useRef(null)
// //   useEffect(()=>{
// //     // const mans=async()=>{
      
// // //       let m=0
// // //       setInterval(()=>{
// // // console.log(m+=1)
// // //       // navigator.geolocation.getCurrentPosition(({coords})=>{
// // //       //   console.log(coords.latitude)
// // //       // })
// // //     //   const ms=await navigator.mediaDevices.getUserMedia({
// // //     //     audio:true,
// // //     //     video:true,
// // //     //   })
// // //     //   // ref.current.srcObject=ms
// // //     // }
// // //     // }
// // //     // mans()
// // //   },1000)

// // // const man=async()=>{


// // //   // const noti=await Notification.requestPermission()

// // //   // if(noti==="granted"){
// // //       // console.log(noti)
// // //        new Notification("example",{
// // //         body:"mans",
// // //         data:{hello:"mansma"}
// // //       })
// // //     // }
// // // }
// // // man()

// //   },[])

// //   const handleNotify = async () => {
// //     const permission = await Notification.requestPermission();

// //     if (permission === "granted") {
// //       new Notification("example", {
// //         body: "mans",
// //         data: { hello: "mansma" },
// //       });
// //     } else {
// //       alert("Notification permission not granted: " + permission);
// //     }
// //   };


// //   let ms;
// //     // for(const ip in obj){
// //     //    return ms=(
// //     //     <div style={{width:"100%"}}>

// //     //     <button >{ip}</button>
// //     //     </div>
// //     //     )
// //     // }


    
// //     const[sus,sets]=useState(null)
// //     const[ons,setons]=useState(false)
// //         const sum=(er,_)=>{
// //           obj[er]+=1
// //             setobj(prev=>({...prev}))
// //             // sets(obj.like)
// //             // return obj[er]++
// // console.log(er)
// //             if(er==="like"){

// //            setons(true)
// //          }
// //         }

          
// //         // }
// //       // }
// //         // useEffect(()=>{
// //         //  run() 
// //         // },[obj])
// //   // ms=Object.entries(obj).map(([key,value])=>{
        
// //   //       <button onClick={()=>sum(key)}>{key}{value} </button>
        

// //   //   })
// //    ms= (Object.entries(obj).map(([key,value])=>(
        
// //           <button key={key} onClick={()=>sum(key,value)}>{key} {value} </button>
        
      

// //   )))
// //   // },[ms])
// //     return (
// //     <div style={{width:"100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
// //       {ms}
// //       {sus}
// //       <video playsInline autoPlay ref={ref} width={"200px"} height={"200px"}></video>
// //       <button onClick={handleNotify}>Show Notification</button>
// //     </div>
// //   )
// // }

// // export default Reader

// import React, { useState } from "react";
// import Notification  from "react-web-notification";

// function App() {
//   const [ignore, setIgnore] = useState(true);
//   const [showNotification, setShowNotification] = useState(false);

//   const handleButtonClick = () => {
//     if (!("Notification" in window)) {
//       alert("Browser does not support notifications.");
//       return;
//     }
    
//         setShowNotification(true);

//     // Notification.requestPermission().then(permission => {
//     //   if (permission === "granted") {
//     //     setIgnore(false);
//     //   } else {
//     //     alert("Notification permission denied.");
//     //   }
//     // });
//   };

//   return (
//     <div>
//       <h1>Web Notification</h1>
//       <button onClick={handleButtonClick}>Trigger Notification</button>

//       {showNotification && (
//         <Notification
//           ignore={ignore}
//           title="Example"
//           options={{
//             body: "mans",
//             tag: "demo",
//             data: { hello: "mansma" },
//           }}
//           onClose={() => setShowNotification(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect } from 'react';

function App() {
  // Register the Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(reg => console.log('Service Worker registered:', reg))
        .catch(err => console.error('Service Worker registration failed:', err));
    }
  }, []);

  // Simulate a background notification
  const sendNotification = async () => {
    
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      alert('Notification permission not granted.');
      return;
    }

    const reg = await navigator.serviceWorker.getRegistration();

    if (reg && reg.active) {
      reg.active.postMessage({ simulatePush: true });
    } else {
      alert('Service Worker not active.');
    }
  };

  return (
    <div>
      <h1>React Background Notification (Simulated)</h1>
      <button onClick={sendNotification}>Simulate Background Notification</button>
    </div>
  );
}

export default App;
