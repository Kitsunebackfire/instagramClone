import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { openSignIn: false },
  reducers: {
    handleOpenSignIn(state) {
      state.openSignIn = true;
    },
    handleCloseSignIn(state) {
      state.openSignIn = false;
    },
  },
});

export const signInActions = signInSlice.actions;

export default signInSlice;
