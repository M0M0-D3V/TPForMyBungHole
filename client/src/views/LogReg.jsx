import { Navbar, Button } from "react-bootstrap";
import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default (props) => {
  return (
    <div className="container text-center">
      <Button variant="outline-secondary" href="/welcome">
        Go back to home...
      </Button>{" "}
      <div className="row">
        {" "}
        {/* <Login /> */}
        <div className="col-sm-4"> </div>{" "}
        <div className="col-sm-4">
          {" "}
          <Register />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
