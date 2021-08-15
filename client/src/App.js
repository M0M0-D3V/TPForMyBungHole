import { useEffect, useState } from 'react';
import React from "react";
import { Container } from "react-bootstrap";
import { Redirect, Router, navigate } from "@reach/router";
import axios from 'axios';
import LogReg from "./views/LogReg";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";
import BuyTP from "./views/BuyTP";

function App() {
  // user use state
  const [user, setUser] = useState([]);
  const [isUser, setIsUser] = useState(false);

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
    <div>
      <Container>
        <Router>
          {/* pass user prop through userMain, welcome, and buyTP */}
          <UserMain path="/" user={user} user={setUser} />
          <Welcome path="/welcome" user={user} default />
          <LogReg path="/login" />
          <BuyTP path="/buytp" user={user} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
