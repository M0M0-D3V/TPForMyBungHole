import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import LogOut from "../components/LogOut";

// THINK THIS DOESN"T NEED TO BE A STANDALONE COMPONENT

export default (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log("not authorized");
        console.log(err);
        navigate("/welcome");
      });
  };

  return <></>;
};
