import React from "react";
import "./styleSheets/UserPageBody.css";
import UserHeader from "./UserPageComponents/UserHeader";

const UserPageBody = () => {
  return (
    <div className="userPageBody">
      <UserHeader />
      <div>user photos</div>
    </div>
  );
};

export default UserPageBody;
