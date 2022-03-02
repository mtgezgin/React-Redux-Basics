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
        existingItem.totalPrice += item.price;
      } else {
        state.items.push({ ...item, quantity: 1, totalPrice: item.price });
      }
      state.totalQuantity += 1;
    },
    removeItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== item.id);
        existingItem.totalPrice -= item.price;
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= item.price;
      }
      state.totalQuantity -= 1;
    },
  }, // reducers
}); // createSlice

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
