import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  let isAuth = true;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
