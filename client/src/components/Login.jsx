import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:9001/api/login",
        { username, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        setErrorMessage(err.response.data.msg);
      });
  };

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <fieldset>
        <legend>Login</legend>
        <form onSubmit={login} style={{ margin: "auto" }}>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            placeholder="username"
          />

          <input
            style={{ marginTop: "10px" }}
            className="form-control"
            type="password"
            name="username"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#8ACB88",
              color: "#ffffff",
            }}
            type="submit"
            className="form-control btn-sm btn-outline-dark btn-block"
          >
            Sign In
          </Button>
          <p className="error-message">{errorMessage ? errorMessage : ""}</p>
        </form>
      </fieldset>
    </div>
  );
};
