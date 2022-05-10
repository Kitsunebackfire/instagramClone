import React from "react";
import Header from "../components/Header";
import "./UserPage.css";
import { useSelector } from "react-redux";

const UserPage = () => {
  const displayName = useSelector((state) => state.loginInfo.displayName);
  return (
    <div>
      <Header />
      <h1>jkjkfjsdl</h1>
      <h2>{displayName}</h2>
    </div>
  );
};

export default UserPage;
