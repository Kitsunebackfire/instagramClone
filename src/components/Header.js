import React from "react";
import "./Header.css";
import SignInModal from "./SignInModal";

function Header() {
  return (
    <div className="header">
      <img
        alt="instagram logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFj87v7cdZAMuQzMol5zsNpdwU87kaGE270YOjLf8vIklU9dfvQnZ_yKE5AiLvgttPA&usqp=CAU"
        className="header__instagramLogo"
      />
      <div>upload image component</div>
      <SignInModal />
      <div> sign up login modal</div>
    </div>
  );
}

export default Header;
