import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../store/productSlice";
import CartReducer from "../store/cartSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    Cart: CartReducer,
  },
});
