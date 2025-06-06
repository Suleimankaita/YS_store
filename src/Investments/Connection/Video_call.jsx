// // import React, { useEffect, useState,useRef, useCallback } from 'react'
// // import { toast, ToastContainer } from 'react-toastify'
// // import img from "../../assets/profile.jpg"
// // import { io } from 'socket.io-client'
// // import  peers  from 'peerjs'
// // const Video_call = () => {

// //     const peer =new peers(undefined,{
// //         host:"/",
// //         port:"localhost:4000"
// //     })

// //     const [dom,setdom]=useState(document.body.style.overflow="hidden")

// //     const [errs,seterrs]=useState(false)
// //     const [User,setUser]=useState([
// //         {
// //             id:0,
// //             name:"suleiman",
// //             audioMute:true,
// //             VideoMute:true
// //         },
// //         {
// //             id:1,
// //             name:"Yusuf",
// //             audioMute:true,
// //             VideoMute:true
// //         },
// //     ])

    


// //     let peerconnection=new RTCPeerConnection()

// //     const vid=useRef(null)
// //     const [audioMutes,setaudioMutes]=useState(true)
// //     const [VideoMutes,setVideoMutes]=useState(true)
// //     const socket=useRef(null)
// //     let sk;
// //     useEffect(()=>{


// //         if(!socket.current){
// //             socket.current=io('http://localhost:4000')
// //         }


// //         socket.current.on('connection',(ids)=>{
// //           console.log(ids)
// //         })

// //         socket.current.off("user_connect").on('user_connect',(sock)=>{
// //             console.log(sock)
// //         })
        

// //         const mans=async()=>{

// //             try{
// //             seterrs(false)
// //                  vid.current.srcObject=await navigator.mediaDevices.getUserMedia({
// //                     audio:audioMutes,video:VideoMutes
// //                 })
// //                 peer.on
                
// //             }catch(err){
// //                 seterrs(true)
// //                 toast.error(err.message)
// //             }
// //         }
// //         mans()

// //     },[audioMutes,VideoMutes,socket.current])
  

// //   const send = useCallback(()=> {

// //   if (socket.current) {
// //     socket.current.emit('message', "sn");
// //   } else {
// //     toast.error("Socket not connected");
// //   }

// //   }, [socket]); 

  
// //   useEffect(()=>{

// //     if(!socket.current){
// //         socket.current=io('http://localhost:4000')
// //     }


// //     const msa=async()=>{

        
// //     const offer=await peerconnection.createOffer()

// //    await peerconnection.setLocalDescription(offer)

// //     console.log(offer)
// //     }
// //     msa()

// //     socket.current.off('messages').on('message',(data)=>{
// //         console.log(data)
// //         toast.success(data)
// //     })

// //     toast.success()

// //   },[socket.current])

    
// //     const muteaudio=(ress)=>{
// //         const ms=User.map(res=>res?.id===ress.id?{...res,audioMute:!res.audioMute}:res)
// //         setaudioMutes(prev=>!prev)
// //         }
        

// //     const mutevideo=(id)=>{User.map(res=>res?.id===id?{...res,VideoMute:!res.VideoMute}:res)
    
// //     setVideoMutes(prev=>!prev)

// // }




// //     const displays=(
// //         // User.map(res=>(
// // <div style={{height:"100vh",width:"100%",justifyContent:"space-evenly",alignContent:"center"}}>

// //             <div className='video_container'>

// //                 <img src={img}  className={!VideoMutes?'on':'of'} width={"90%"} height={"90%"} alt="" />
            
// //             <video muted={true} playsInline autoPlay ref={vid} height={"90%"} width={"100%"} >

// //         <button onClick={()=>{
// //             // setaudioMutes(res.audioMute)
// //         }}>audio</button>
// //         </video>
// //         <div className="btn_buttons_video">

// //         <button onClick={()=> {
// //             if(!errs)return setVideoMutes(prev=>!prev)
// //             }}>vid</button> 
// //         <button onClick={()=> setaudioMutes(prev=>!prev)}>audio</button> 
// //         </div>
// //         </div>   

            

// // </div>
// //     )



// //     return (
// //     <article className='Video'>
// //         <ToastContainer/>
// //         {displays}

// // <button onClick={send}>suleman</button>

// //     </article>
// //   )
// // }

// // export default Video_call

// import React, { useEffect, useRef, useState,useCallback } from 'react';
// import { io } from 'socket.io-client';
// import Peer from 'peerjs';
// import { useParams } from 'react-router-dom';
// import { useDispatch,useSelector } from 'react-redux';
// import { createAns,createOffer } from '../../features/Peer';

// const VideoRoom = ({ roomId, userName }) => {

//     const [peers, setPeers] = useState({});
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');
//   const socketRef = useRef(null);
//   const myVideo = useRef();
//   const videosRef = useRef({});
//   const peerRef = useRef(new RTCPeerConnection({
//   iceServers: [
//     {
//       urls: "stun:stun.l.google.com:19302",
//     },
//   ],
// }));
//   const disp=useDispatch()

//   const {id}=useParams()


//   let ids;


//   const handleOffer=useCallback(async()=>{
    
//     // return offer
//     console.log("Offer created:", offer);
// },[peerRef,socketRef.current])


// const[strs,setstrs]=useState(null)

// const handleAns=useCallback(async(offer)=>{

//   console.log("Offer :", offer);

//     const offers=await peerRef.current.setRemoteDescription(offer)
    

//     const ans=await peerRef.current.createAnswer()
    
//     await peerRef.current.setLocalDescription(ans)

//     socketRef.current.emit("call-user",ans)

    

// },[peerRef.current,socketRef.current])

//   useEffect(() => {

//     if(!socketRef.current) {
//         socketRef.current = io('http://localhost:4000');
//         }


//     //    socketRef.current.on("call-User",handleOffer()) ;

//     // handleOffer()

//     peerRef.current.ontrack=(e)=>{
//       e.streams[0].getTracks().forEach(res=>{
//             console.log(res)
//       });
//     }

//     const mans=async()=>{
//         const offer = await peerRef.current.createOffer();
//     await peerRef.current.setLocalDescription(offer);
//     // socketRef.current.emit('call-User', { offer, roomId: id,  });

//     console.log(offer)

//     socketRef.current.emit('join-room', { roomId:id, userId: peerRef.current.id,offer:offer });
//     }
//     mans()

       


//     //    socketRef.current.off('join-room',handleOffer())

       
//        socketRef.current.on("user-connected",(offer)=>{
//         console.log(offer) 
//         handleAns(offer)}) ;

    
//         // socketRef.current.emit("call-User",disp(createOffer()))

//         socketRef.current.on('chat-message', (message) => {
//         console.log(message,peerRef.current?.id)
//       setMessages(message);
//     });
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
//       myVideo.current.srcObject = stream;
//       myVideo.current.play();

//       peerRef.current.on('call', call => {
//         call.answer(stream);
//         const video = document.createElement('video');
//         call.on('stream', userVideoStream => {
//           if (!videosRef.current[call.peer]) {
//             videosRef.current[call.peer] = video;
//             addVideoStream(video, userVideoStream);
//           }
//         });
//       });

//     //   socketRef.current.emit('join-room', { roomId:id, userId: peerRef.current.id });

//       socketRef.current.on('user-connected', userId => {
//         const call = peerRef.current.call(userId, stream);
//         const video = document.createElement('video');
        
//         call.on('stream', userVideoStream => {
//           if (!videosRef.current[userId]) {
//             videosRef.current[userId] = video;
//             addVideoStream(video, userVideoStream);
//           }
//         });
//       });
//     });


//     return()=>{
//         //   socketRef.current.off("call-User",handleAns) ;
       
//         //   socketRef.current.off("call-User",handleOffer) ;

//     }


//   }, [handleOffer,socketRef.current,peerRef.current]);

//   const addVideoStream = (video, stream) => {
//     video.srcObject = stream;
//     video.addEventListener('loadedmetadata', () => {
//       video.play();
//     });
//     document.getElementById('video-grid').append(video);
//   };


//     const sendMessage = () => {
//     socketRef.current.emit('chat-message', { userName:"suleiman", text,id:id});
//     setText('');
//     };


//   return (
//     <div>
//       <div id="video-grid">
//         <video ref={myVideo} muted></video>
//         <video ref={strs} muted></video>
//       </div>

//       <div className="chat-box">
//         <div className="messages">
//           {messages.map((msg, i) => (
//             <div key={i}><strong>{msg.userName}:</strong> {msg.text}</div>
//           ))}
//         </div>
//         <input
//           value={text}
//           onChange={e => setText(e.target.value)}
//           onKeyPress={e => e.key === 'Enter' && sendMessage()}
//           placeholder="Type a message"
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default VideoRoom;







import { useRef, useEffect, useCallback, useState } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

const VideoCall = () => {
    const socket = useRef(null);
    const { id: roomId } = useParams();
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerRef = useRef(null);

    const [audios,setaudios]=useState(true)

    const mute=()=>setaudios(prev=>!prev)

    // Initialize WebRTC connection
    const createPeerConnection = useCallback(() => {
        peerRef.current = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
            ],
        });

        // Handle incoming tracks
        peerRef.current.ontrack = (event) => {
            if (event.streams && event.streams[0]) {
                remoteVideoRef.current.srcObject = event.streams[0];
            }
        };

        // ICE candidate handler
        peerRef.current.onicecandidate = (event) => {
            if (event.candidate) {
                socket.current.emit('ice-candidate', {
                    candidate: event.candidate,
                    to: roomId
                });
            }
        };
    }, [roomId]);

    // Initialize call
    const call = useCallback(async () => {
        try {
            const offer = await peerRef.current.createOffer();
            await peerRef.current.setLocalDescription(offer);
            socket.current.emit("call-User", { offer, id: roomId });
        } catch (error) {
            console.error("Error in call function:", error);
        }
    }, [roomId]);

    // Answer call
    const answerCall = useCallback(async (offer) => {
        try {
            await peerRef.current.setRemoteDescription(offer);
            const answer = await peerRef.current.createAnswer();
            await peerRef.current.setLocalDescription(answer);
            socket.current.emit("answer", { answer, id: roomId });
        } catch (error) {
            console.error("Error in answerCall function:", error);
        }
    }, [roomId]);

    // Accept answer
    const accept = useCallback(async ({ answer }) => {
        try {
            await peerRef.current.setRemoteDescription(answer);
        } catch (error) {
            console.error("Error in accept function:", error);
        }
    }, []);

    // Handle ICE candidates
    const handleICECandidate = useCallback(({ candidate }) => {
        try {
            if (candidate) {
                peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
            }
        } catch (error) {
            console.error("Error adding ICE candidate:", error);
        }
    }, []);

    useEffect(() => {
        // Setup media and peer connection
        const setup = async () => {
            try {
                createPeerConnection();
                
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: audios,
                });

                localVideoRef.current.srcObject = stream;

                // Add tracks to peer connection
                stream.getTracks().forEach(track => {
                    peerRef.current.addTrack(track, stream);
                });

                // Initiate call after setup
                await call();
            } catch (error) {
                console.error("Media setup error:", error);
            }
        };

        setup();

        return () => {
            if (localVideoRef.current?.srcObject) {
                localVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }
            if (peerRef.current) {
                peerRef.current.close();
            }
        };
    }, [createPeerConnection, call,audios]);

    useEffect(() => {
        // Socket connection and event listeners
        socket.current = io('http://localhost:4000');

        socket.current.on('incomming-call', ({ offer }) => {
            answerCall(offer);
        });

        socket.current.on('accept', accept);
        
        socket.current.on('ice-candidate', handleICECandidate);

        socket.current.emit('join-room', roomId);

        return () => {
            if (socket.current) {
                socket.current.disconnect();
            }
        };
    }, [roomId, answerCall, accept, handleICECandidate]);

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
        }}>
            <video
                playsInline
                autoPlay
                ref={localVideoRef}
                width={300}
                height={400}
                muted
            />
            <button onClick={mute}>Mute</button>
            <video
                playsInline
                autoPlay
                ref={remoteVideoRef}
                width={300}
                height={400}
            />
        </div>
    );
};

export default VideoCall;