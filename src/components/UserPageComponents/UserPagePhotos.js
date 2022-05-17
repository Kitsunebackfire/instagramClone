import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsColRef } from "../../firebase";
import { onSnapshot, query, orderBy, where } from "firebase/firestore";
import { userSliceActions } from "../../app/slices/userSlice";
import "./styleSheets/UserPagePhotos.css";

const UserPagePhotos = () => {
  const dispatch = useDispatch();
  const displayName = useSelector((state) => state.loginInfo.displayName);
  const userPhotosState = useSelector((state) => state.user.userPhotos);
  const posts = useSelector((state) => state.posts.posts);
  const userPosts = posts.filter((post) => post.username === displayName);
  // sets logged in users photos in store

  return (
    <div className="userPagePhotos__photosContainer">
      {userPosts.map((post) => {
        return (
          <div key={post.id} className="userPagePhotos__photoContainer">
            <img
              className="userPagePhotos__photo"
              src={post.imageUrl}
              alt={post.caption}
            />
          </div>
        );
      })}
      {/* <button onClick={() => console.log(posts)}>allphotos</button>
      <button onClick={() => console.log(userPosts)}>user photos</button> */}
    </div>
  );
};

export default UserPagePhotos;
