import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
    comment: "",
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
      console.log(state.posts);
    },
    setcomment(state, action) {
      state.comment = action.payload;
      console.log(state.comment);
    },
    resetComment(state, action) {
      state.comment = "";
      console.log("comment state cleared");
    },
  },
});

export const postsSliceActions = postsSlice.actions;

export default postsSlice;
