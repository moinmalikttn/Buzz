import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function LoginPrivateRoute() {
  const user = localStorage.getItem("userToken") == null ? true : false;
  return <div>{user && <Outlet /> };</div>;
}

export default LoginPrivateRoute;
