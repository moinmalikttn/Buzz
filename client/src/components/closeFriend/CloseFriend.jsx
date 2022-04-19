import React, { useState, useContext } from "react";
import {Link} from 'react-router-dom'
// import axios from "axios";

import axios from "axios";
import "./closeFriend.css";
import { Add, Remove } from "@material-ui/icons";


// import { AuthContext } from "../../context/AuthContext";

function CloseFriend({ user , me:currentUser}) {
  

  console.log("current user is = ", currentUser);
  // console.log("user hai ye=",user)
  console.log("user id =", user._id)
  // console.log("user email = ", user.email)
  // console.log("current me  = ", me._id)
  const [followed, setFollowed] = useState(
    currentUser.following?.length && currentUser.following.includes(user?.id)
  );
  console.log("follower user is =",followed);

  const handleClick = async () => {
    console.log(followed);
    try {
      if (followed) {
        await axios.put(`http://localhost:8000/users/${user._id}/unfollow`, 
        {
          userId: currentUser._id,
        });
        
      } else {
        await axios.put(`http://localhost:8000/users/${user._id}/follow`, 
        {
          userId: currentUser._id,
        });
      }
      setFollowed(!followed);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.imageUrl} alt="" />
      <span className="sidebarFriendName"> <Link to={`/feeds/userprofile/${user.name}`} id="UserName" >{user.name}</Link></span>
      <span className= "btnRight">
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
