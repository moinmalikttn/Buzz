import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
// import axios from "axios";
import "./closeFriend.css";
// import { AuthContext } from "../../context/AuthContext";

function CloseFriend({ user }) {
  // const { user: currentUser, dispatch } = useContext(AuthContext);

  // const [followed, setFollowed] = useState(
  //   currentUser.following.includes(user?.id)
  // );

  // const handleClick = async () => {
  //   try {
  //     if (followed) {
  //       await axios.put(`/users/${user._id}/unfollow`, {
  //         userId: currentUser._id,
  //       });
  //       dispatch({ type: "UNFOLLOW", payload: user._id });
  //     } else {
  //       await axios.put(`/users/${user._id}/follow`, {
  //         userId: currentUser._id,
  //       });
  //       dispatch({ type: "FOLLOW", payload: user._id });
  //     }
  //     setFollowed(!followed);
  //   } catch (err) {}
  // };

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.imageUrl} alt="" />
      <span className="sidebarFriendName">
      <Link to={`/feeds/userprofile/${user.name}`} id="UserName" >{user.name}</Link>
        <span>
          {/* <button className="profbutton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
          </button> */}
        </span>
      </span>
    </li>
  );
}

export default CloseFriend;
