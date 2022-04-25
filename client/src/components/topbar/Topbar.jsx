import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "@material-ui/icons";
import axios from "axios";

import "./topbar.css";

function Topbar() {
  // logout button
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // chat application

  const chatButton = () => {
    navigate("/chatApp");
  };

  // calling user

  const user = JSON.parse(localStorage.getItem("userData"));

  // search the user by name

  const [userName, setUserName] = useState("");
  const [buzzUsers, setBuzzUsers] = useState([]);
  // console.log("my name is =", userName);
  console.log("buzz users are =", buzzUsers);

  const handleSubmit = async (e) => {
    if (e.keyCode === 13) {
      console.log("enter");
      console.log(userName);
      await axios
        .get(`http://localhost:8000/authusers/${userName}`)
        .then((response) => {
          setBuzzUsers(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <header className="topbarContainer">
      <nav>
        <ul>
          <li>
            <a href="/" id="ttn">
              <img
                src="http://www.bestmediainfo.com/wp-content/uploads/2014/03/TTN-logo.jpg"
                width="70"
                alt="ttn logo"
              />
            </a>
          </li>

          <div className="topbarCenter">
            <div className="searchbar">
              <Search className="searchIcon" />

              <input
                placeholder="Search for friend"
                className="searchInput"
                type="text"
                // value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => handleSubmit(e)}
              />
            </div>
          </div>
          <div>
            {buzzUsers.map((user) => {
              return (
                <li className="sidebarFriend">
                  <img
                    src={user.imageUrl}
                    alt=""
                    className="sidebarFriendImg"
                  />
                  <span className="sidebarFriendName">{user.name}</span>
                </li>
              );
            })}
          </div>

          {/* // right side navbar compoenents */}

          <li id="space2" />
          <li>
            {/* user profile */}
            <img
              // src="https://pbs.twimg.com/profile_images/1505231632738881536/C1oQKyY3_400x400.jpg"
              src={user.profileObj.imageUrl}
              alt="moin malik"
              className="topbarImg"
            />
          </li>

          <li>
            <button
              onClick={chatButton}
              className="tooltip"
              data-tooltip="Message"
              id="btn_msg"
            >
              <i className="fab fa-facebook-messenger" />
            </button>
          </li>

          <li>
            <button className="tooltip" data-tooltip="Profile" id="btn_profile">
              <i className="fas fa-user-cog" />
            </button>
          </li>
          <li>
            <button
              onClick={logout}
              className="tooltip"
              data-tooltip="Profile"
              id="btn_profile"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
