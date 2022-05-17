import React from "react";

import UserHeader from "./UserHeader";
import "./styleSheets/UserPageBody.css";
import UserPagePhotos from "./UserPagePhotos";

const UserPageBody = () => {
  return (
    <div className="userPageBody">
      <UserHeader />
      <div className="userPageBody__photosContainer">
        <UserPagePhotos />
      </div>
    </div>
  );
};

export default UserPageBody;
