import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
