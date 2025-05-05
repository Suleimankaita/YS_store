import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        auth: null,
        user: null,
        comment: 0,
        Cart:JSON.parse(localStorage.getItem("Cart"))||[],
    }


    const postslice = createSlice({
    
    name: "auth",
    initialState,
    reducers: {

        setlogin: (state, action) => {
            state.auth = action.payload;
        },
        setlogout: (state, action) => {
            state.auth = action.payload;
        },
        setuser: (state, action) => {
            state.user = action.payload;
        },
        setcom: (state, action) => {
            state.comment = action.payload;
        },
        Add_card:(state,action)=>{
           
            const existingItem = state.Cart.find(item => item.id === action.payload.id);

            let updatedCart;
            if (existingItem) {
              // Increase quantity
              updatedCart = state.Cart.map(item =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
              // console.log(updatedCart)
            } else {
              // Add new item
              updatedCart = [...state.Cart, { ...action.payload,
                //  quantity: 1
                }];
              // console.log(updatedCart)
            
            }
        
            // Save to localStorage
            localStorage.setItem('Cart', JSON.stringify(updatedCart));
        
            return {
              ...state,
              Cart: updatedCart,
            };
          },

          dec:(state,action)=>{
            const existingItem = state.Cart.find(item => item.id === action.payload.id);

            let updatedCart;
            if (existingItem) {
              // Increase quantity
              updatedCart = state.Cart.map(item =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity - 1, }
                  : item
              );

            } 
            if(existingItem.quantity <= 1 ){
              console.log("mans")
              const ms=state.Cart.filter(item=>item?.id!==action.payload.id)
              updatedCart=ms
            }


        
            // Save to localStorage
            localStorage.setItem('Cart', JSON.stringify(updatedCart));
        
            return {
              ...state,
              Cart: updatedCart,
            };
          },
          deleteAll:(state,action)=>{
            state.Cart=[]
            
            localStorage.clear("Cart")
          },  
          dele:(state,action)=>{
          const updatedCart = state.Cart.filter(item => item.id !== action.payload.id);
          localStorage.setItem('Cart', JSON.stringify(updatedCart));
           return {
             ...state,
             Cart: updatedCart,
           };
          }
    },

});

export const { setlogin, setuser,setcom ,setlogout,Add_card,dec,deleteAll,dele} =postslice.actions;

export const carts=(state=>state.auth.Cart)
export const commentss=(state=>state.auth.comment)
export default postslice.reducer;