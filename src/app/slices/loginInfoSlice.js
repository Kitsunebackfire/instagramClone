import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: { username: "", email: "", password: "" },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
      console.log(state.username);
    },
    resetUsername(state) {
      state.username = "";
      console.log(state.username);
    },
    setEmail(state, action) {
      state.email = action.payload;
      console.log(state.email);
    },
    resetEmail(state) {
      state.email = "";
      console.log(state.email);
    },
    setPassword(state, action) {
      state.password = action.payload;
      console.log(state.password);
    },
    resetPassword(state) {
      state.password = "";
      console.log(state.password);
    },
  },
});

export const loginInfoActions = loginInfoSlice.actions;

export default loginInfoSlice;
