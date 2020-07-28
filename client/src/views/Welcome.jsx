import React from "react";
import { Navbar, Button } from "react-bootstrap";
import Login from "../components/Login";
import cornholio from "../img/cornholio.png";

export default () => {
  return (
    <div className=" container text-center">
      {/* need to fix LoggedUser to flag if logged in... */}
      {/* <LoggedUser /> */}

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Got TP?</Navbar.Brand>
        <Button variant="outline-secondary" href="/login">
          Need an account? Register here!
        </Button>
      </Navbar>
      <h2>I AM CORNHOLIO!</h2>
      <img
        src={cornholio}
        className="img-fluid"
        alt="cornholioresponsive"
      ></img>
      <p className="lead">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <Login />
          </div>
        </div>

        <Button
          variant="outline-secondary"
          href="/user"
          style={{ marginTop: "20px" }}
        >
          Enter as Guest
        </Button>
      </p>
    </div>
  );
};
