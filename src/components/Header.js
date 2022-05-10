import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SignInModal from "./HeaderComponents/SignInModal";
import SignUpModal from "./HeaderComponents/SignUpModal";
import ImageUploadModal from "./HeaderComponents/ImageUploadModal";
import { mdiAccountCircleOutline, mdiHomeCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfoActions } from "../app/slices/loginInfoSlice";
import Logout from "./HeaderComponents/Logout";

function Header() {
  const loggedIn = useSelector((state) => state.loginInfo.loggedIn);

  return (
    <div className="header">
      <img
        alt="instagram logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
        className="header__instagramLogo"
      />

      <div className="header__navContainer">
        <Link to="/">
          <Icon
            className="header__navIcon"
            path={mdiHomeCircleOutline}
            title="Home"
          />
        </Link>
        <ImageUploadModal />
        <Link to="/userProfile">
          <Icon
            className="header__navIcon"
            path={mdiAccountCircleOutline}
            title="User Profile"
          />
        </Link>
      </div>
      {loggedIn ? (
        <Logout />
      ) : (
        <div className="header__loginContainer">
          <SignInModal />
          <SignUpModal />
        </div>
      )}
    </div>
  );
}

export default Header;
