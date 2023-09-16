import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utilis";

const PublicRoute = (props) => {
  const { Component } = props;
  return isLogin() ? <Navigate to="/dashboard" /> : <Component />;
};

export default PublicRoute;
