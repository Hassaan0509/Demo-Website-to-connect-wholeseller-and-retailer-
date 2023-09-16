import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utilis";

const PrivateRoute = (props) => {
  const { Component } = props;
  return isLogin() ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
