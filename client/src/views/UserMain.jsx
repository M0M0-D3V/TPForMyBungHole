import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button, Navbar } from "react-bootstrap";
import LogOut from "../components/LogOut";
import axios from "axios";

export default (props) => {
  // const [view, setView] = useState(0);
  // const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
        setIsUser(true);
      })
      .catch((err) => {
        console.log("not authorized");
        console.log(err);
        navigate("/");
      });
  };

  return (
    <div className="container text-center" style={{ height: "650px" }}>
      {isUser ? (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">GOT TP?</Navbar.Brand>
          <h3>Welcome, {user.username}!</h3>

          <LogOut />
        </Navbar>
      ) : (
        <Button
          variant="outline-secondary"
          href="/login"
          style={{ marginBottom: "20px", color: "#648381" }}
        >
          Need an account? Register here!
        </Button>
      )}
    </div>
  );
};
