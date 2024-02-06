import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../interfaces/products";

interface InitialState {
  products: CartProduct[];
}

const initialState: InitialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product?.id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (product) => product?.id === action.payload
      );
      state.products[index].quantity++;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (product) => product?.id === action.payload
      );
      if (state.products[index].quantity > 1) {
        state.products[index].quantity--;
      }
    },
  },
});
