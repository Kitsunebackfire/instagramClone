import React, { useState } from "react";
import "./SignInModal.css";
import Button from "@mui/material/Button";
import { loginInfoActions } from "../../app/slices/loginInfoSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Logout() {
  const dispatch = useDispatch();
  const setLoggedIn = () => dispatch(loginInfoActions.setLoggedIn());
  const logoutUser = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setLoggedIn();
      })
      .catch((err) => {
        // An error happened.
        console.log(`sign out error occurred, ${err}`);
      });
  };
  return (
    <div>
      <Button onClick={(e) => logoutUser(e)}>Logout</Button>
    </div>
  );
}

export default Logout;
