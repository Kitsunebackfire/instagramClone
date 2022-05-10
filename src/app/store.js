import { configureStore } from "@reduxjs/toolkit";
import loginInfoSlice from "./slices/loginInfoSlice";
import signInSlice from "./slices/signInSlice";
import signUpSlice from "./slices/signUpSlice";
import postsSlice from "./slices/postsSlice";
//import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    loginInfo: loginInfoSlice.reducer,
    signIn: signInSlice.reducer,
    signUp: signUpSlice.reducer,
    posts: postsSlice.reducer,
  },
  // had to incorprate middleware due to firebase data time being unserializable. Needed property to arrange posts
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
