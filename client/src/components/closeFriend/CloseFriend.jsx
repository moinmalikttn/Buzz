import React, { useState } from "react";
import axios from "axios";
import "./closeFriend.css";
import { Add, Remove } from "@material-ui/icons";
// import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

console.log("auth context =", AuthContext);

function CloseFriend({ user, me: currentUser }) {
  // const {user:currentUser} = useContext(AuthContext)
  // console.log("current user is = ", currentUser);
  // console.log("user hai ye=",user)
  // console.log("user id =", user._id);
  // console.log("user email = ", user.email)
  // console.log("current me  = ", me._id)
  const [followed, setFollowed] = useState(
    currentUser.followings?.length &&
      currentUser.followings.filter((corr) => corr === user.id)
  );
  console.log("follower user is =", followed);

  // start using conetc api in react js

  const handleClick = async () => {
    console.log(followed);
    try {
      if (followed) {
        await axios.put(`http://localhost:8000/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        // dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`http://localhost:8000/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        // dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.imageUrl} alt="" />
      <span className="sidebarFriendName">{user.name}</span>
      <span className="btnRight">
        {user.name !== currentUser.name && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
      </span>
    </li>
  );
}

export default CloseFriend;
