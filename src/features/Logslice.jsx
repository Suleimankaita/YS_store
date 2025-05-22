import { apislice } from "../api/apislice";
import { createEntityAdapter,createSelector } from "@reduxjs/toolkit";

const postadapter = createEntityAdapter();

const initialState = postadapter.getInitialState();

export const postslice=apislice.injectEndpoints({

    endpoints:(builder)=>({

        getProduct:builder.query({
            query:()=>"/get",

            transformResponse:(response)=>{
                const mans=response.map(res=>{
                    res.id=res._id;
                    return res;
                })
                return postadapter.setAll(initialState,mans);
            }


        })

    })

})

export const { 
    useGetProductQuery
}=postslice

export const extendendapi=postslice.endpoints.getProduct.select();

 export const selector= createSelector(
    extendendapi,
     res=>res?.data

 )
export const {selectAll:selectallpost,selectById:selectpostbyid}=postadapter.getSelectors((state)=>state.post??initialState);