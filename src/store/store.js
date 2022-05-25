import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../store/productSlice";

export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
