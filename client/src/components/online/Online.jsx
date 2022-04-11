import React from "react";
import "./online.css";

function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.imageUrl} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rigthbarUsername">{user.name}</span>
    </li>
  );
}

export default Online;
