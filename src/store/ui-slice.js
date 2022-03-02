import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isShowCart: false, // true: show cart, false: hide cart  (default: false)
    notification: null, // { status: "success", title: "", message: "" }
  },
  reducers: {
    toggleCart: (state, action) => {
      state.isShowCart = !state.isShowCart; // toggle cart
    },
    showNotification: (state, action) => {
      state.notification = action.payload; // { status, title, message }
    },
  },
});

export const { toggleCart, showNotification } = uiSlice.actions;

export default uiSlice.reducer;
