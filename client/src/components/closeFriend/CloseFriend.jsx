import React, { useState, useContext } from "react";
import { useEffect } from 'react'
import {intiateSocketConnection} from '../../socketio.service'
import { disconnectSocket } from '../../socketio.service'


import {Link} from 'react-router-dom'
// import axios from "axios";

import axios from "axios";
import "./closeFriend.css";
import { Add, Remove } from "@material-ui/icons";


// import { AuthContext } from "../../context/AuthContext";

function CloseFriend({ user , me:currentUser}) {
  console.log(`user is ${user.email}`);
  console.log(`me is ${currentUser.name}`);
  
  useEffect(()=>{
    intiateSocketConnection();
    return () =>{
      disconnectSocket();
    }
  },[])

  

  //console.log("current user is = ", currentUser);
  
  //console.log("user id =", user._id)
  
  const [followed, setFollowed] = useState(
    currentUser.following?.length && currentUser.following.includes(user?.id)
  );
  //console.log("follower user is =",followed);

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
      <span className="sidebarFriendName"><Link to={`/feeds/userprofile/${user.name}`} id="UserNames" >{user.name}</Link></span>
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
