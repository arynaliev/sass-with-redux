import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummyData";

const initialState = {
  allItems: products,
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    emptyCart: (state, action) => {},
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
