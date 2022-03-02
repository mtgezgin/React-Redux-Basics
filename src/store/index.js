import cartReducer from "./cart-slicer";
import uiReducer from "./ui-slicer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default store;
