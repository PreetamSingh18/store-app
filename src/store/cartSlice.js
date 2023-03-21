import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `increased ${state.cartItems[itemIndex].title.substr(0,20)+"..."} cart quantity`,
          {
            position: "bottom-left",
            autoClose: 1000,
            className: 'toast-message'
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title.substr(0,20)+"..."}added to cart`, {
          position: "bottom-left",
          autoClose: 1000,
          className: 'toast-message'
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    remove(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems=nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error (`${action.payload.title.substr(0,20)+"..."} removed from cart`, {
        position: "bottom-left",
        autoClose: 1000,
        className: 'toast-message'
      });
    },
    removeSingleItem(state, action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(state.cartItems[itemIndex].cartQuantity>1){
        state.cartItems[itemIndex].cartQuantity-=1;
        toast.info (`${action.payload.title.substr(0,20)+"..."} quantity decreased `, {
          position: "bottom-left",
          autoClose: 1000,
          className: 'toast-message'
        });
      }
      else if(state.cartItems[itemIndex].cartQuantity===1){
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems=nextCartItems;
        toast.error (`${action.payload.title.substr(0,20)+"..."} removed from cart`, {
          position: "bottom-left",
          autoClose: 1000,
          className: 'toast-message'
        });
        
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state,action){
      state.cartItems=[];
      toast.error (`Cart Cleared`, {
        position: "bottom-left",
        autoClose: 1000,
        className: 'toast-message'
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state,action){
     let {total,quantity}= state.cartItems.reduce((cartTotal,cartItem)=>{
        const {price,cartQuantity}=cartItem;
        const itemTotal=price*cartQuantity;
        cartTotal.total+=itemTotal;
        cartTotal.quantity+=cartQuantity;
        return cartTotal;
      },{
        total:0,
        quantity:0,
      });
      state.cartTotalQuantity=quantity;
      state.cartTotalAmount=total;
    }

  },
});
export const { add, remove,removeSingleItem, clearCart,getTotal } = cartSlice.actions;
export default cartSlice.reducer;
