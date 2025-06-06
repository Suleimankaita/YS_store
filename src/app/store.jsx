import { configureStore } from "@reduxjs/toolkit";
import postslice  from "../features/funcSlice";
import Peer  from "../features/Peer";
import apislice  from "../api/apislice";
export default configureStore({
    reducer: {
        auth: postslice,
        PeerSlice: Peer,
        [apislice.reducerPath]: apislice.reducer,
        
    },
    getmiddleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apislice.middleware),
    devtools: process.env.NODE_ENV !== "production",
});