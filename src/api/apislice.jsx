import {fetchBaseQuery ,createApi} from '@reduxjs/toolkit/query/react';

// import { setlogin } from '../features/funcSlice';

 const baseQuery = fetchBaseQuery ({
    baseUrl :"https://ict-vazm.onrender.com",
    credentials:"include",
    prepareHeaders:(Headers,{getState})=>{
        const token = getState()?.auth?.auth;
        if(token){
            Headers.set("authorization",`Bearer ${token}`);
        }
        return Headers;
    }
})


// const baseQuerywithreauth = async (arg, api, extraopt) => {
    
//     let result=await baseQuery(arg,api,extraopt);
    
//     if(result?.error?.originalStatus===403 || result?.error?.originalStatus===401){
//         const secoundresult=await baseQuery("/auth",api,extraopt);
        
//         if(secoundresult?.data){
//             await api.dispatch(setlogin(secoundresult?.data));
//             result=await baseQuery(arg,api,extraopt);
//         }else{
//             if(secoundresult?.error?.originalStatus===401){
//                 await api.dispatch(setlogin(null));
//                 window.location.href="/form";
//             }
        // return secoundresult

//         }
//         return result;
//     }
// }

 const apislice = createApi({
    reducerPath:"api",
    baseQuery:baseQuery,
    tagTypes:["Post","transaction"],
    endpoints:(builder)=>({})
})

export default apislice;