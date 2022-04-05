import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

function Right() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> having borthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendlist">
          {Users.map((u) => {
            <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Right;
