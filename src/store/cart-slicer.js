import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { showNotification } from "./ui-slicer";
import { database } from "../config/database";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.items = action.payload.items;
    },
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending data...",
        message: "Sending Cart Data!",
      })
    ); // showNotification

    const sendRequest = async () => {
      const response = await axios.put(`${database}/cart.json`, cart); // send cart data to firebase

      if (response.status !== 200) {
        throw new Error("Sending cart data failed!"); // throw error
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Cart data sent successfully!",
        }) // showNotification
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        }) // showNotification
      );
    }
  };
};

export const { addItem, removeItem, replaceCart } = cartSlice.actions; // export actions

export default cartSlice.reducer; // export reducer
