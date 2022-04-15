import React from "react";
import "./profilecard.css";
import { Link } from "react-router-dom";

function ProfileCard({ user }) {
  return (
    <div className="card">
      <div className="upper-container">
        <div className="img-container">
          <img src={user.imageUrl} alt={user.name} />
        </div>
      </div>

      <div className="lower-container">
        <h3>{user.name}</h3>
        <h4>Welcome to Newers Family</h4>
        <Link to={`/feeds/myprofile/${user.name}`} type="button">
          <button className="profbutton">Visit Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
