import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userPhotos: [],
  },
  reducers: {
    setUserPhotos(state, action) {
      state.uploads = action.payload;
      console.log(state.userPhotos);
      console.log(state.userPhotos.length);
    },
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice;
