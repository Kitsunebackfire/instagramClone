import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SignInModal from "./HeaderComponents/SignInModal";
import SignUpModal from "./HeaderComponents/SignUpModal";
import ImageUploadModal from "./HeaderComponents/ImageUploadModal";
import { mdiAccountCircleOutline, mdiHomeCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./HeaderComponents/Logout";
import { loginInfoActions } from "../app/slices/loginInfoSlice";
import { signUpActions } from "../app/slices/signUpSlice";
import { signInActions } from "../app/slices/signInSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginInfo.user);
  const username = useSelector((state) => state.loginInfo.username);
  const displayName = useSelector((state) => state.loginInfo.displayName);

  useEffect(() => {
    const setUser = (arg) => dispatch(loginInfoActions.setUser(arg));
    const setDisplayName = (arg) =>
      dispatch(loginInfoActions.setDisplayName(arg));
    const handleCloseSignUp = () => dispatch(signUpActions.handleCloseSignUp());
    const handleCloseSignIn = () => dispatch(signInActions.handleCloseSignIn());
    const resetForms = () => dispatch(loginInfoActions.resetForms);

    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        console.log(authUser.displayName);

        // state tracking of user
        setUser(authUser);
        if (authUser.displayName) {
          setDisplayName(authUser.displayName);
          // dont update username
          handleCloseSignIn();
          handleCloseSignUp();
        } else {
          // if we just created someone
          updateProfile(auth.currentUser, { displayName: username })
            .then(() => {
              setDisplayName(authUser.displayName);
              //profile updates
              console.log("profile updated and assigned a username");
              //console.log(user);
              resetForms();
              handleCloseSignUp();
            })
            .catch((err) => {
              console.log(
                `error occured trying to update profile, error message: ${err}`
              );
            });
        }
      } else {
        // user has logged out
        setUser(null);
        console.log("no user logged in");
      }
    });
    return () => {
      // perform cleanup action before firing the use effect again
      return unsubscribe();
    };
  }, [dispatch, username]);

  return (
    <div className="header">
      <img
        alt="instagram logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
        className="header__instagramLogo"
      />

      {user ? (
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
      ) : (
        <div className="header__navContainer">
          <Link to="/">
            <Icon
              className="header__navIcon"
              path={mdiHomeCircleOutline}
              title="Home"
            />
          </Link>
        </div>
      )}

      {user ? (
        <div className="header__loginContainer">
          <div className="header__welcomeDisplayName">
            Welcome {displayName}!
          </div>
          <Logout />
        </div>
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
