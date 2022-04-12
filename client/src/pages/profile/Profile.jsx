import React from 'react'
import "./profile.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import Profiles from '../../components/userProfiles/Profiles'

function Profile() {
  return (
    <>
    
    <Topbar />
    <div className="profileContainer">
      
      <Profiles />
      <Rightbar />
    </div>
    </>
    
  )
}

export default Profile