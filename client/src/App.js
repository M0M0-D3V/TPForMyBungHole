import React from "react";
import { Container } from "react-bootstrap";
import { Router } from "@reach/router";
import LogReg from "./views/LogReg";
import Welcome from "./views/Welcome";
import UserMain from "./views/UserMain";

function App() {
  return (
    <div>
      <Container>
        <Router>
          <UserMain path="/" />
          <Welcome path="/welcome" />
          <LogReg path="/login" />
        </Router>
      </Container>
    </div>
  );
}

export default App;
