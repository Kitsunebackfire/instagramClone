import React from "react";
import Header from "../components/Header";
import "./UserPage.css";
import { useSelector } from "react-redux";
import UserPageBody from "../components/UserPageComponents/UserPageBody";

const UserPage = () => {
  const displayName = useSelector((state) => state.loginInfo.displayName);

  return (
    <div>
      <Header />
      <div className="userPage__body">
        <UserPageBody />
      </div>
    </div>
  );
};

export default UserPage;
