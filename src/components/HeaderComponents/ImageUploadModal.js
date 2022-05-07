import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCameraPlusOutline } from "@mdi/js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./ImageUploadModal.css";

function ImageUploadModal() {
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

  const [openUpload, setOpenUpload] = useState(false);

  return (
    <div>
      <Icon
        className="imageUploadModal__icon"
        onClick={() => setOpenUpload(true)}
        path={mdiCameraPlusOutline}
        alt="icon"
      />

      <Modal
        open={openUpload}
        onClose={() => setOpenUpload(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="imageUploadModal__modal">
            <img
              alt="instagram logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
              className="signInModal__image"
            />

            <Input
              className="imageUpload__captionInput"
              id="caption_input"
              type="text"
              placeholder="Enter a caption..."
              //onChange={(e) => setCaption(e.target.value)}
            />
            <Input
              className="imageUpload__fileInput"
              id="file_upload"
              type="file"
              //onChange={handleChange}
            />
            <Button className="imageUploadModal__uploadBtn">Upload</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ImageUploadModal;
