import { configureStore } from "@reduxjs/toolkit";
import loginInfoSlice from "./slices/loginInfoSlice";
import signInSlice from "./slices/signInSlice";
import signUpSlice from "./slices/signUpSlice";
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    loginInfo: loginInfoSlice.reducer,
    signIn: signInSlice.reducer,
    signUp: signUpSlice.reducer,
  },
});
