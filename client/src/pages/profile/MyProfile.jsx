import React from 'react'
import Mineprofile from '../../components/myprofile/Mineprofile'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'

const MyProfile = () => {


  return (
    <>
    
    <Topbar />
    <div className="profileContainer">
      
      <Mineprofile />
      <Rightbar />
    </div>
    </>
  )
}

export default MyProfile
