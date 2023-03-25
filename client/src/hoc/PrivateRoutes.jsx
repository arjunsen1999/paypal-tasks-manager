import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { isError, isSuccess,  user } = useSelector(
    (state) => state.userLogin
  );
  let isAuth = user;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
