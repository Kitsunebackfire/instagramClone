import { createSlice } from "@reduxjs/toolkit";

const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: {
    username: "",
    email: "",
    password: "",
    loggedIn: false,
    user: null,
    displayName: "",
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
      //console.log(state.username);
    },
    resetUsername(state) {
      state.username = "";
      //console.log(state.username);
    },
    setEmail(state, action) {
      state.email = action.payload;
      //console.log(state.email);
    },
    resetForms(state) {
      state.email = "";
      state.password = "";
      state.username = "";
      console.log(
        `reset username, email, and password, ${state.username} + ${state.email} + ${state.password}`
      );
    },
    setPassword(state, action) {
      state.password = action.payload;
      //console.log(state.password);
    },
    setLoggedIn(state) {
      if (state.loggedIn === false) {
        state.loggedIn = true;
        console.log(state.loggedIn);
      } else if (state.loggedIn === true) {
        state.loggedIn = false;

        console.log(state.loggedIn);
      }
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setDisplayName(state, action) {
      state.displayName = action.payload;
      console.log(`displayName is set to ${state.displayName}`);
    },
    resetDisplayName(state) {
      state.displayName = "";
      console.log(`display name is reset, ${state.displayName}`);
    },
  },
});

export const loginInfoActions = loginInfoSlice.actions;

export default loginInfoSlice;
