import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const jsonServerURL = "http://localhost:9000/products";
    // const realURL = "https://fakestoreapi.com/products";
    const res = await fetch(jsonServerURL);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
