import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, VideoCallRounded } from "@material-ui/icons";
import axios from "axios";
import { acceptedRequest } from "../../socketio.service";
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
    navigate("/messenger");
  };

  // calling user

  const user = JSON.parse(localStorage.getItem("userData"));
 

  // search the user by name

  const [userName, setUserName] = useState("");
  const [buzzUsers, setBuzzUsers] = useState([]);
  // console.log("my name is =", userName);
  console.log("buzz users are =", buzzUsers);

  const handleSubmit = async (e) => {
    if (e.keyCode === 13)
    {
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

  //search the user by name,email and friendList
  let [id,setId] = useState('');
  let [friendList,setFriendlist] = useState([]);
  let [names,setNames] = useState([]);
  let [emailName,setemailName] = useState([]);
  console.log(friendList);
  console.log(id);  
  console.log(names);
  

  let searchUser = ()=>{
     axios.get(`http://localhost:8000/authusers/${user.profileObj.name}`)
    .then((value)=>{
      
      setId(value.data[0]._id);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
  let searchUserbyEmail = (list) =>{
    if(list===undefined)return ;
    list.map((user)=>{
      console.log(user);
      return (
      axios.get(`http://localhost:8000/authusers/${user.Email}/Email`)
      .then((value)=>{
        // console.log(value);
        
        setNames((values)=>[...values,{name:value.data[0].name,email:value.data[0].email,id:value.data[0]._id}]);
      })
      .catch((err)=>{
      console.log(err);
      }));
    })
  }
  
  let getFriendList = ()=>{
    axios.get(`http://localhost:8000/friendrequest/${id}`)
    .then((value)=>{
      
      setFriendlist(value.data.request);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  searchUser();
  useEffect(()=>{
    
    getFriendList();
  },[id]);

  useEffect(()=>{
    setNames([]);
    searchUserbyEmail(friendList);
  },[friendList]);

  //Request handling

  let reqAccepted = async(value)=>{
      await axios.delete(`http://localhost:8000/friendrequest/${id}/request/${value.email}`)

      await axios.delete(`http://localhost:8000/friendrequest/${value.id}/sentRequest/${user.profileObj.email}`)

      await axios.put(`http://localhost:8000/users/${id}/follow`, {
          userId: value.id,
        });

        getFriendList();
        acceptedRequest({recieverEmail:user.profileObj.email,senderName:value.name});
  }

  let cancelRequest = async(value)=>{
    await axios.delete(`http://localhost:8000/friendrequest/${id}/request/${value.email}`)

    await axios.delete(`http://localhost:8000/friendrequest/${value.id}/sentRequest/${user.profileObj.email}`)
      
  }

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
                placeholder="Search for friends"
                className="searchInput"
                type="text"
                // value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyUp={(e) => handleSubmit(e)}
              />
            </div>

            <div className = "srchResult">
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
            
          </div>

          
          {/* search result  */}
          

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
            <div className="dropdown">
            <button className="tooltip dropbtn" data-tooltip="Profile" id="btn_profile">
              <i className="fas fa-user-cog" />
            </button>
            <div className="dropdown-content">
              {
                names.map((value)=>{
                  
                  return (<div className="FriendList">
                    <p>{value.name}</p>
                    <button type="submit" className="cancelBtn" onClick={()=>cancelRequest(value)}>Cancel</button>
                    <button type="submit" className="acceptBtn" onClick={()=>reqAccepted(value)}>Accept</button>
                  </div>);
                })
              }
            </div>
            </div>
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
