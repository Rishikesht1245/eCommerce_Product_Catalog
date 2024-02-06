// to store the single product details
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSingleProductAPI } from "../api/products";
import { ProductState } from "../interfaces/products";

const initialState: ProductState = {
  loading: false,
  error: null,
  product: null,
};

//  slice
export const productSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //  fetchSingleProduct.fulfilled means "ProductSlice/fetchSingleProduct/fulfilled"
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

// createAsyncThunk api calls
// fetch product
export const fetchSingleProduct = createAsyncThunk(
  "ProductSlice/fetchSingleProduct",
  async (id: number) => {
    const { data } = await fetchSingleProductAPI(id);
    // action.payload
    return data;
  }
);
