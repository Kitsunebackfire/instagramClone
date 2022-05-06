import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { signInActions } from "../app/slices/signInSlice";

const SignInModal = () => {
  const dispatch = useDispatch();
  const signInIsOpen = useSelector((state) => state.signIn.openSignIn);
  //const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpenSignIn = () => dispatch(signInActions.handleOpenSignIn());
  const handleCloseSignIn = () => dispatch(signInActions.handleCloseSignIn());

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
          <form className="modal__signup">
            <img
              alt="instagram logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
              className="modal__image"
            />

            <Input
              placeholder="email"
              type="email"
              required
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              minLength="6"
              required
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
            />
            <Button style={{ marginTop: "10px" }}>Sign In</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
