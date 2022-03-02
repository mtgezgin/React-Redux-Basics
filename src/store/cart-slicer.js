import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        existingItem.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;
    },
  }, // reducers
}); // createSlice

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
