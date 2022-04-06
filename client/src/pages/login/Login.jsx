import React from "react";
import "./login.css";
import { GoogleLogin } from "react-google-login";
import axios from "axios"
import { useState } from "react";


function Login() {
  const [authenticate,setAuthenticate]=useState(false);

  const responseGoogle = (response) => {
    
    axios.post("http://localhost:8000/authusers",{
      email:response.profileObj.email,
      googleId:response.profileObj.googleId,
      imageUrl:response.profileObj.imageUrl,
      name:response.profileObj.name,
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))

    if(!response.profileObj.googleId){
      setAuthenticate(false);
    }
  }

  return (
    <>
    {authenticate ? (<div className="main">
        <div className="login_page">
          <div className="container">
            <img className="logo" src="/assets/ttnlogo.jpg" alt="logo" />
            <div className="content">
              <h3 className="main_heading">
                Enter your details and Start your journey with us
              </h3>
              <p className="main_para">Dont't stop until you're proud.</p>
            </div>
            <div className="auth_container">
              {/* <span className="auth_button">Sign in with Google</span> */}
              <GoogleLogin
                clientId="181370592160-7e2ekrj6dr7v2v2tuc5unbdhs0capuh8.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
      </div>) : (
        <div>
          User unauthenticate for this organization
          </div>
      )}
      
    </>
  );
}

export default Login;