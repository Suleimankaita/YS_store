import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        auth: null,
        user: null,
        lengths:null,
        theame:JSON.parse(localStorage.getItem("theame"))||false,
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
        addLength: (state, action) => {
            state.lengths = action.payload;
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
      seen:false,
      checked:true ,         //  quantity: 1
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
        card_checked:(state,action)=>{
           
          let updatedCart=state.Cart.map(res=>res?.id===action.payload?.id?{...res,checked:!res?.checked}:res)
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
          },
          changetheame:(state,action)=>{
      
            const am=state.theame=!state.theame;
            localStorage.setItem("theame",JSON.stringify(am))
          },
          save_like:(state,action)=>{
            const find=state.Cart.find(item=>item.id===action.payload.id);
            if(find){
              const updatedCart = state.Cart.map(item => item.id === action.payload.id ? { ...item, seen: !item.seen } : item);
              localStorage.setItem('Cart', JSON.stringify(updatedCart));
               return {
                 ...state,
                 Cart: updatedCart,
               }
          }

        },
        cart_allChecked:(state,action)=>{
          const updatedCart = state.Cart.map(item => ({ ...item, checked: action.payload }));
          localStorage.setItem('Cart', JSON.stringify(updatedCart));
           return {
             ...state,
             Cart: updatedCart,
           };
        }
      }
});

export const { addLength,cart_allChecked,setlogin, setuser,setcom ,changetheame, setlogout,Add_card,dec,deleteAll,dele,card_checked,save_like} =postslice.actions;

export const carts=(state=>state.auth.Cart)
export const theame=(state=>state.auth.theame)
export const commentss=(state=>state.auth.comment)
export const lengths=(state=>state.auth.lengths)
export default postslice.reducer;