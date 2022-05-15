import React from "react";
import "./styleSheets/UserHeader.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const UserHeader = () => {
  const displayName = useSelector((state) => state.loginInfo.displayName);
  return (
    <div className="userHeader">
      <Avatar
        style={{
          height: "130px",
          width: "130px",
          fontSize: "3rem",
        }}
        className="userHeader__avatar"
        alt={displayName}
        src="/static/images/avatar/1.jpg"
      />

      <div className="userHeader__infoContainer">
        <div className="userHeader__displayName">{displayName}</div>
        <div className="userHeader__numberOfPhotos">number of photos</div>
      </div>
    </div>
  );
};

export default UserHeader;
