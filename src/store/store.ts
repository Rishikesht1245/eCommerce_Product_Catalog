import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { cartSlice } from "./cartSlice";
import { currentUserSlice } from "./currentUserSlice";

const store = configureStore({
  reducer: {
    singleProduct: productSlice.reducer,
    cart: cartSlice.reducer,
    currentUser: currentUserSlice.reducer,
  },
});

export default store;

//  used as the type of state in our store , ReturnType is a function in ts which extracts the return type of store.getState
export type RootState = ReturnType<typeof store.getState>;
//  used as the type fo dispatch function
export type AppDispatch = typeof store.dispatch;
