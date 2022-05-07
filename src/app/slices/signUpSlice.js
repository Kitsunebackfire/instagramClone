import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: { signUpIsOpen: false },
  reducers: {
    handleOpenSignUp(state) {
      state.signUpIsOpen = true;
    },
    handleCloseSignUp(state) {
      state.signUpIsOpen = false;
    },
  },
});

export const signUpActions = signUpSlice.actions;

export default signUpSlice;
