import React from "react";
import { Navbar, Button } from "react-bootstrap";
import Login from "../components/Login";
import cornholio from "../img/cornholio.png";

export default () => {
  return (
    <div className=" container text-center">
      {/* need to fix LoggedUser to flag if logged in... */}
      {/* <LoggedUser /> */}

      <Button
        variant="outline-secondary"
        href="/login"
        style={{ marginBottom: "20px", color: "#648381" }}
      >
        Need an account? Register here!
      </Button>
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
          href="/"
          style={{ marginTop: "20px", color: "#648381" }}
        >
          Continue as Guest
        </Button>
      </p>
    </div>
  );
};
