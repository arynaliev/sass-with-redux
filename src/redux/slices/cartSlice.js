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
    addItem: (state, action) => {
      const newItem = action.payload;
      state.cartItems.push(newItem);
      state.totalPrice += newItem.price;
    },

    // if (itemInCart) {
    //   // itemInCart.quantity += 1;

    //   state.totalPrice += newItem.price;
    //   // itemInCart.stockCount -= 1;
    // } else {
    //   state.cartItems.push(newItem);
    //   state.totalPrice += newItem.price;
    //   // newItem.stockCount -= 1;
    // }

    // addExistingItem: (state, action) => {},
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      state.totalPrice -= itemToRemove.price;
    },
    emptyCart: (state, action) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
