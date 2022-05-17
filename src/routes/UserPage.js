import React from "react";
import Header from "../components/Header";
import "./UserPage.css";
import UserPageBody from "../components/UserPageComponents/UserPageBody";

const UserPage = () => {
  return (
    <div className="app">
      <Header />
      <div className="userPage__body">
        <UserPageBody />
      </div>
    </div>
  );
};

export default UserPage;
