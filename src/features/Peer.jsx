import { createSlice } from "@reduxjs/toolkit";

const initialState={

    perr:new RTCPeerConnection({
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
})

}

const Peerslice=createSlice({
    name:"PeerSlice",
    initialState,
    reducers:{

        createOffer:(state,action)=>{
            // const offer=await state.Perr.createOffer()
            // await state.Perr.setLocalDescription(offer)
            console.log("oofer")
            // return offer
        },
        // createAns:async(state,action)=>{
        //     await state.Perr.setRemoteDescription(action.payload)
        //     const answer=await state.Perr.createAnswer()
        //     await state.Perr.setLocalDescription(answer)
        //     // return answer
        // }
    }
})

export const {createOffer,createAns}=Peerslice.actions;

export default Peerslice.reducer;