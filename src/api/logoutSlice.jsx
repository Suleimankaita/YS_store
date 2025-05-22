import apislice from './apiSlice'
import { setlogout } from '../features/funcSlice';  

 export const slices=apislice.injectEndpoints({

    endpoints:(builder)=>({
        logout:{
            query:()=>({
                url:"/auth",
                method:"POST"
            }),
            async onQueryStarted(arg,{dispatch,queryFulfilled}){
                const result=await queryFulfilled;
                if(result?.error){
                    console.log("error",result.error);
                }else{
                    setTimeout(() => {
                        
                        console.log("success",result.data);
                        dispatch(setlogout(null));
                        dispatch(apislice.util.resetApiState())
                    }, 1000);
                }
            }
        }
    })
 })