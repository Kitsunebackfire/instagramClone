import React, { useState } from "react";
import "./SignUpModal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signUpActions } from "../../app/slices/signUpSlice";
import { loginInfoActions } from "../../app/slices/loginInfoSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const usernameState = useSelector((state) => state.loginInfo.username);
  const emailState = useSelector((state) => state.loginInfo.email);
  const passwordState = useSelector((state) => state.loginInfo.password);
  const signUpIsOpen = useSelector((state) => state.signUp.signUpIsOpen);
  const handleOpenSignUp = () => dispatch(signUpActions.handleOpenSignUp());
  const handleCloseSignUp = () => dispatch(signUpActions.handleCloseSignUp());
  const setLoggedIn = () => dispatch(loginInfoActions.setLoggedIn());

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, emailState, passwordState)
      .then((cred) => {
        console.log("user created", cred.user);
        setLoggedIn();
      })
      .catch((err) => {
        alert(
          `error occurred trying to createUserWithEmailAndPassword, ${err.message}`
        );
      });
  };
  return (
    <div>
      <Button onClick={handleOpenSignUp}>Sign up</Button>

      <Modal
        open={signUpIsOpen}
        onClose={handleCloseSignUp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="signUpModal__modal" onSubmit={(e) => signUp(e)}>
            <img
              alt="instagram logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
              className="signUpModal__image"
            />
            <TextField
              variant="standard"
              placeholder="username"
              type="text"
              name="username"
              required
              value={usernameState}
              onChange={(e) =>
                dispatch(loginInfoActions.setUsername(e.target.value))
              }
            />
            <TextField
              variant="standard"
              placeholder="email"
              type="email"
              name="email"
              required
              value={emailState}
              onChange={(e) =>
                dispatch(loginInfoActions.setEmail(e.target.value))
              }
            />
            <TextField
              variant="standard"
              placeholder="password"
              type="password"
              name="password"
              minLength="6"
              required
              value={passwordState}
              onChange={(e) =>
                dispatch(loginInfoActions.setPassword(e.target.value))
              }
            />

            {}
            <Button type="submit" style={{ marginTop: "10px" }}>
              Sign Up
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default SignUpModal;
