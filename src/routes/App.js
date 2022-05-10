import React, { useEffect } from "react";
import Header from "../components/Header";
import "./App.css";
import { Avatar } from "@mui/material";
import "../components/Post.css";
import { postsColRef, db, auth, storage } from "../firebase";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "../app/slices/postsSlice";

function App() {
  const dispatch = useDispatch();
  const setPosts = (arg) => dispatch(postsSliceActions.setPosts(arg));
  const postsState = useSelector((state) => state.posts.posts);

  /*const posts = [
    {
      caption: "weekend almost over",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-6438d.appspot.com/o/images%2F826cb21148370e4ca1a28c54fe2551a4--doberman-love-doberman-funny.jpg?alt=media&token=8f86a9d6-337f-48ad-a3cf-65d48b69e706",
      username: "zoe",
    },
    {
      caption: "weafsdfsdlmost over",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/instagram-clone-6438d.appspot.com/o/images%2Ff8e8566eed5eb92fe2e8826cd868786e.jpg?alt=media&token=c5300dd6-cde4-4744-8306-e28c70b63d03",
      username: "kurtis",
    },
  ];*/

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
            <div key={index} className="post">
              <div className="post__header">
                <Avatar
                  className="post__avatar"
                  alt={post.username}
                  src="/static/images/avatar/1.jpg"
                />
                <h3>{post.username}</h3>
              </div>

              {/*header -> avatar + username */}

              <img className="post__image" alt="sub" src={post.imageUrl} />
              {/* image */}
              <h4 className="post__text">
                <strong>{post.username}</strong>: {post.caption}
              </h4>
              {/* username + caption */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
