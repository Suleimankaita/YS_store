import { configureStore } from "@reduxjs/toolkit";
import postslice  from "../features/funcSlice";
import apislice  from "../api/apislice";
export default configureStore({
    reducer: {
        auth: postslice,
        [apislice.reducerPath]: apislice.reducer,
        
    },
    getmiddleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apislice.middleware),
    devtools: process.env.NODE_ENV !== "production",
});