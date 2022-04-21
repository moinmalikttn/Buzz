import React from "react";
import { useNavigate } from "react-router";
import { Search } from "@material-ui/icons";

import "./topbar.css";

function Topbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // calling user

  const user = JSON.parse(localStorage.getItem("userData"));

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
                placeholder="Search for friend, post or video"
                className="searchInput"
              />
            </div>
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
            <button className="tooltip" data-tooltip="Message" id="btn_msg">
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
