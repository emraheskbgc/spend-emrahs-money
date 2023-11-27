import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const responsive = await axios.get("/data.json");
      return responsive.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    money: 1000000,
    selectedProducts: [],
  },
  reducers: {
    increment: (state, action) => {
      const { productId } = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
        state.money -= parseInt(product.price);
        state.selectedProducts = [...state.selectedProducts, { ...product }];
      }
    },
    decrement: (state, action) => {
      const { productId } = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
        state.money += parseInt(product.price);
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = action.payload.map((product) => ({
        ...product,
        quantity: 0,
      }));
    },
    [getProducts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { increment, decrement } = productsSlice.actions;
export default productsSlice.reducer;
