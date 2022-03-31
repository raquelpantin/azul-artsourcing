import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute(props) {
  const navigate = useNavigate();
  const Private = props.Private;
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Private />
    </>
  );
}

export default PrivateRoute;
