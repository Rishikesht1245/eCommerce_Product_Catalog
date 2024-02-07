import { createSlice } from "@reduxjs/toolkit";
import { removeLocalData, saveLocally } from "../utils/localStorage";

// for using in store file
export const currentUserSlice = createSlice({
  name: "CurrentUserSlice",
  initialState: null,
  reducers: {
    //login data will be stored in local storage in login handler function
    login: (state, action) => {
      console.log(state);
      saveLocally(action.payload);
      return action.payload;
    },
    logout: () => {
      removeLocalData();
      return null;
    },
  },
});

//  for dispatching actions
export const currentUserActions = currentUserSlice.actions;
