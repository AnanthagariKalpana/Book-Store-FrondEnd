import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import bookSlice from "./BookSlice";


const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    book: bookSlice,
  },
});

export default appStore;