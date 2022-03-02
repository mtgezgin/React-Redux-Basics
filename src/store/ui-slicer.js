import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isShowCart: false, // true: show cart, false: hide cart  (default: false)
  },
  reducers: {
    toggleCart: (state, action) => {
      state.isShowCart = !state.isShowCart;
    },
  },
});

export const { toggleCart } = uiSlice.actions;

export default uiSlice.reducer;
