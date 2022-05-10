import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: { posts: [] },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
      console.log(state.posts);
    },
  },
});

export const postsSliceActions = postsSlice.actions;

export default postsSlice;
