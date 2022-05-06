import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./slices/signInSlice";
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
  },
});
