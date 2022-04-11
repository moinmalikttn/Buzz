import React, { useState, useEffect } from "react";
import "./rightbar.css";

import Online from "../online/Online";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import axios from "axios";

export default function Rightbar() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("http://localhost:8000/authusers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 others friends</b> having Birthday Today
          </span>
        </div>

        {/* suggested friends   */}
        {/* using dummy data  */}
        <h4 className="rightbarTitle">Suggestions</h4>
        <ul className="sidebarFriendList">
          {users.map((u) => {
            return <CloseFriend key={u.id} user={u} />;
          })}
        </ul>
        <hr />

        {/* online friends  */}
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendlist">
          {users.map((u) => {
            return <Online key={u.id} user={u} />;
          })}
        </ul>
      </div>
    </div>
  );
}
