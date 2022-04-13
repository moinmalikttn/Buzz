import React, { useState , useEffect} from "react";
import "./sidebar.css";
import ProfileCard from "../profilecard/ProfileCard";
import axios from "axios";

import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

function Sidebar() {

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
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
         {users.map((u) => {
           return (
            <ProfileCard user = {u}/>
           )
         })}
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarbarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarbarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarbarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarbarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarbarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarbarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarbarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarbarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarbarListItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}

export default Sidebar;
