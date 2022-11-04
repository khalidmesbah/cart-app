import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const theProduct = state.find((e) => e.id === product.id);
      if (theProduct) {
        theProduct?.count && theProduct.count++;
      } else {
        state.push({ ...product, count: 1 });
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    clearCart: (state) => [],
  },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
