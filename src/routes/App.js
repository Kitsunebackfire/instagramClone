import React from "react";
import Header from "../components/Header";
import "./App.css";
import "../components/Post.css";

import { useSelector } from "react-redux";

import Post from "../components/Post";

function App() {
  const postsState = useSelector((state) => state.posts.posts);

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
