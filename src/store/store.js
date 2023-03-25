import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
    categories:categoryReducer,

   
  },
});

export default store;
