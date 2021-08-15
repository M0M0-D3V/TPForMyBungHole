import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button, Navbar, NavItem, NavLink } from "react-bootstrap";
import LogOut from "../components/LogOut";
import axios from "axios";
import cornholio from "../img/cornholio.png";

export default ({ user, setUser }) => {
  // const [view, setView] = useState(0);
  // const [modalShow, setModalShow] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [errors, setErrors] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const getLoggedInUser = () => {
    axios
      .get("http://localhost:9001/api/users/loggedin", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setIsUser(true);
      })
      .catch((err) => {
        console.log("not authorized");
        console.log(err);
        navigate("/");
      });
  };

  const clickTP = (e) => {
    e.preventDefault();
    navigate("/buytp");
  };

  return (
    <div className="container text-center">
      {isUser ? (
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">GOT TP?</Navbar.Brand>
            <h3>Welcome, {user.username}!</h3>
            <NavItem>
              <NavLink>My Purchases</NavLink>
            </NavItem>
            <LogOut />
          </Navbar>
          <img
            src={cornholio}
            className="img-fluid"
            alt="cornholioresponsive"
          ></img>
        </>
      ) : (
        <>
          <div className="row">
            <h2>Welcome, Bungholio!</h2>
            <Button
              variant="outline-secondary"
              href="/login"
              style={{ marginBottom: "20px", color: "#648381" }}
            >
              Need an account? Register here!
            </Button>
          </div>
          <img
            src={cornholio}
            className="img-fluid"
            alt="cornholioresponsive"
          ></img>
        </>
      )}
      {/* ternary ends here */}
      <hr />
      {/* start Purchase options */}
      <h1>What are you buying?</h1>
      <div className="row">
        <div className="col-md-6 text-center">
          <Button
            variant="outline-info btn-block"
            href="#"
            onClick={clickTP}
            style={{ fontSize: "20pt", padding: "40px" }}
          >
            TP DUH
          </Button>
        </div>
        <div className="col-md-6 text-center">
          <Button
            variant="outline-info btn-block"
            href="#"
            style={{ fontSize: "20pt", padding: "40px" }}
          >
            +
          </Button>
        </div>
      </div>
      <hr />
      <a href="#" class="btn btn-secondary btn-block" role="button">
        <h5>dude.. I just want a calculator..</h5>
      </a>
    </div>
  );
};
