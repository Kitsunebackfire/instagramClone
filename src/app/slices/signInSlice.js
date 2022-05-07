import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: { signInIsOpen: false },
  reducers: {
    handleOpenSignIn(state) {
      state.signInIsOpen = true;
    },
    handleCloseSignIn(state) {
      state.signInIsOpen = false;
    },
  },
});

export const signInActions = signInSlice.actions;

export default signInSlice;
