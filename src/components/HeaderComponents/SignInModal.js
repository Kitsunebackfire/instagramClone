import React, { useState } from "react";
import "./SignInModal.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signInActions } from "../../app/slices/signInSlice";
import { loginInfoActions } from "../../app/slices/loginInfoSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

const SignInModal = () => {
  const dispatch = useDispatch();
  const signInIsOpen = useSelector((state) => state.signIn.signInIsOpen);
  //const usernameState = useSelector((state) => state.loginInfo.username);
  const emailState = useSelector((state) => state.loginInfo.email);
  const passwordState = useSelector((state) => state.loginInfo.password);
  //const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpenSignIn = () => dispatch(signInActions.handleOpenSignIn());
  const handleCloseSignIn = () => dispatch(signInActions.handleCloseSignIn());
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

  const signIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, emailState, passwordState)
      .then((userCredential) => {
        // Signed in
        console.log("log in successful via sign in");
        setLoggedIn();
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button onClick={handleOpenSignIn}>Sign In</Button>

      <Modal
        open={signInIsOpen}
        onClose={handleCloseSignIn}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="signInModal__modal">
            <img
              alt="instagram logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
              className="signInModal__image"
            />

            <Input
              placeholder="email"
              name="email"
              type="email"
              required
              value={emailState}
              onChange={(e) =>
                dispatch(loginInfoActions.setEmail(e.target.value))
              }
            />
            <Input
              placeholder="password"
              name="password"
              type="password"
              minLength="6"
              required
              value={passwordState}
              onChange={(e) =>
                dispatch(loginInfoActions.setPassword(e.target.value))
              }
            />
            <Button onClick={(e) => signIn(e)} style={{ marginTop: "10px" }}>
              Sign In
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
