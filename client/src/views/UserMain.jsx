import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import LogOut from "../components/LogOut";
import axios from "axios";

export default (props) => {
  const [view, setView] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState([]);

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

  return (
    <div className="container" style={{ height: "650px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">KIND WORDS</Navbar.Brand>
        <h3>Welcome, {firstInitial(user.username)}!</h3>
        <Nav.Item>
          <Nav.Link
            onClick={(e) => {
              setView(4);
              setModalShow(true);
            }}
          >
            INBOX
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <audio controls autoPlay>
              <source src={song} type="audio/mpeg"></source>
            </audio>
          </Nav.Link>
        </Nav.Item>

        <LogOut />
      </Navbar>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <Button
          variant="outline-info"
          onClick={(e) => {
            setView(1);
            setModalShow(true);
          }}
        >
          Make a Request
        </Button>
        {"      "}
        <Button
          variant="outline-info"
          onClick={(e) => {
            setView(2);
            setModalShow(true);
          }}
        >
          View Requests
        </Button>
      </div>
      {view === 0 ? (
        <Dragonite />
      ) : view === 1 ? (
        <NewRequest
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : view === 2 ? (
        <ViewRequests
          user={user}
          show={modalShow}
          onHide={(e) => setModalShow(false)}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};
