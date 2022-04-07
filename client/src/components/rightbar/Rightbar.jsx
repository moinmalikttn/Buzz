import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";


export default function Rightbar({ user }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> having borthday today
          </span>
        </div>
        <h4 className="rightbarTitle">Suggestions</h4>
        <ul className="sidebarFriendList">
          {Users.map((u) => {
            return <CloseFriend key={u.id} user={u} />;
          })}
        </ul>
        <hr />
       
       {/* onlien friends  */}
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendlist">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}
