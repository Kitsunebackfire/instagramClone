import React, { useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { db } from "../firebase.js";
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import { useSelector } from "react-redux";
// only taking in post item from array and index
// display name is acquired through loginInfoSlice state properties

function Post({ post, index }) {
  const postId = post.id;
  const username = post.username;
  const caption = post.caption;
  const imageUrl = post.imageUrl;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const subCollection = collection(db, `posts/${postId}/comments`);
  const commentInputControl = document.querySelector(".commentInput");
  const displayName = useSelector((state) => state.loginInfo.displayName);
  const user = useSelector((state) => state.loginInfo.user);

  const handleComment = (e) => {
    e.preventDefault();
    let formInput = e.target.firstChild;
    try {
      addDoc(subCollection, {
        timestamp: serverTimestamp(),
        username: displayName,
        comment: comment,
      });
      setComment("");

      formInput.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  const q = query(subCollection, orderBy("timestamp", "desc"), limit(5));
  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = onSnapshot(q, (snapshot) => {
        console.log("setting comments from on snapshot listener");
        setComments(snapshot.docs.map((doc) => doc.data()));
        // use flex-direction: column-reverse to show last comment on bottom
      });
    }

    return () => {
      console.log("performing cleanup");
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <div key={index} className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/*header -> avatar + username */}
      <img className="post__image" alt="sub" src={imageUrl} />
      {/* image */}
      {/* username + caption */}{" "}
      <div className="post__text">
        <strong>{username}</strong>: {caption}
      </div>
      <div className="post__commentsContainer">
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <span className="post__commentsUser">
                <strong>{comment.username}:</strong>{" "}
              </span>
              <span className="post__commentsComment">{comment.comment}</span>
            </div>
          );
        })}
      </div>
      {user ? (
        <form
          className="post__commentInputContainer"
          onSubmit={(e) => handleComment(e)}
        >
          <input
            required
            id="commentInputControl"
            className="post__commentInput"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            type="text"
            placeholder="Add a comment..."
          ></input>
          <button className="post__postButton">Post</button>
        </form>
      ) : (
        <div className="post__commentInputContainer">
          <input
            disabled
            className="post__commentInput"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            type="text"
            placeholder="Sign In to comment..."
          ></input>
          <Button disabled className="post__postButton" onClick={handleComment}>
            Post
          </Button>
        </div>
      )}
    </div>
  );
}

export default Post;
