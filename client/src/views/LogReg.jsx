import { Navbar, Button } from "react-bootstrap";
import React from "react";
import Login from "../components/Login";
// import Register from "../components/Register";

export default (props) => {
  return (
    <div className="container center">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Got TP?</Navbar.Brand>
        <Button variant="outline-secondary" href="/">
          Go back to home...
        </Button>
      </Navbar>
      <div className="row">
        {/* <Login /> */}
        <div className="col-sm-4"></div>
        <div className="col-sm-4">{/* <Register /> */}</div>
      </div>
    </div>
  );
};
