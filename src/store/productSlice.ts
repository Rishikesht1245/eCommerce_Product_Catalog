// to store the student details since admission is a three page process
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSingleProductAPI } from "../api/products";

const initialState: any = {};

//  slice
export const productSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //  fetchSingleProduct.fulfilled means "ProductSlice/fetchSingleProduct/fulfilled"
    builder.addCase(fetchSingleProduct.fulfilled, (_, action) => {
      // return will update the initial state
      return action.payload;
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
