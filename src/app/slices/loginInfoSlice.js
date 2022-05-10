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
    resetEmailandPassword(state) {
      state.email = "";
      state.password = "";
      console.log(
        `reset both the email and password, ${state.email} + ${state.password}`
      );
    },
    setPassword(state, action) {
      state.password = action.payload;
      console.log(state.password);
    },
  },
});

export const loginInfoActions = loginInfoSlice.actions;

export default loginInfoSlice;
