import React, { useEffect } from "react";
import Header from "../components/Header";
import "./App.css";
import "../components/Post.css";
import { postsColRef } from "../firebase";
import { onSnapshot, query, orderBy } from "firebase/firestore";

import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "../app/slices/postsSlice";

import Post from "../components/Post";

function App() {
  const dispatch = useDispatch();
  const setPosts = (arg) => dispatch(postsSliceActions.setPosts(arg));
  const postsState = useSelector((state) => state.posts.posts);

  // sets posts in store
  useEffect(() => {
    const q = query(postsColRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      let postsArray = [];
      snapshot.forEach((doc) => {
        postsArray.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setPosts(postsArray);
    });
    return () => unsub();
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="app__postsContainer">
        {postsState.map((post, index) => {
          return (
            <div key={index}>
              <Post post={post} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
