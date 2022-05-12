import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCameraPlusOutline } from "@mdi/js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import "./ImageUploadModal.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { storage, postsColRef } from "../../firebase.js";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.loginInfo.user);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [openUpload, setOpenUpload] = useState(false);
  const captionInput = document.getElementById("caption_input");
  const fileUpload = document.getElementById("file_upload");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const resetFields = () => {
    setCaption("");
    setImage(null);
    captionInput.value = "";
    fileUpload.value = null;
  };

  const handleUpload = () => {
    if (image === null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Image Uploaded");

      // upload is successful
      getDownloadURL(imageRef).then((url) => {
        try {
          addDoc(postsColRef, {
            timestamp: serverTimestamp(),
            caption: caption,
            imageUrl: url,
            username: user.displayName,
          });
          resetFields();
          setOpenUpload(false);
        } catch (err) {
          console.log(err);
        }
      });

      /**/
    });
  };

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
              onChange={(e) => setCaption(e.target.value)}
            />
            <Input
              className="imageUpload__fileInput"
              id="file_upload"
              type="file"
              onChange={handleChange}
            />
            <Button
              className="imageUploadModal__uploadBtn"
              onClick={handleUpload}
            >
              Upload
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ImageUploadModal;
