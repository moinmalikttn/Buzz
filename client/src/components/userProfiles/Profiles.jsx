import React from 'react';
import "./profiles.css";
import {FaUserPlus} from "react-icons/fa"
import {Users} from '../../dummyData'

function Profiles() {
    console.log(Users);
    const name=Users[3].username;
    const image=Users[3].profilePicture
    const info='Sarah Wood is co-founder and COO of video ad tec company,';
  return (
      <>
      <div className="userProfile">
        <div className='upper_container'>
          <div className='img_container'>
            <img src={image} alt={name} width="100px"
              height="100px"  />
           </div>
        </div>
        <div className='lower_container'>
          <h1>{name}</h1>
          <h3>{info}</h3>
          <button className='AddFriend'><FaUserPlus /> Add Friend</button>
          <button className='visitWeb'>Visit Website </button>
        </div>

      </div>
    
    </>
  )
}

export default Profiles