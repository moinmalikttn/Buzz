import React from "react";
import "./online.css";
import {Link} from 'react-router-dom'

function Online({ user }) {
  
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.imageUrl} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rigthbarUsername" > <Link to={`/feeds/userprofile/${user.name}`} id="UserName">{user.name}</Link></span>
    </li>
  );
}

export default Online;
