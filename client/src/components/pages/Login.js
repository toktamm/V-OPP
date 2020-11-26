import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import "../../App.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Login(props) {
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // // if there's a user show the message below
  // if (email) {
  //   return <div>{email} is loggged in</div>;
  // }

  function handleSubmit(event) {

    event.preventDefault();

    let data = {
      email,
      password
    };
    return axios
      .post("http://localhost:3001/api/users/login", data)
      .then((res) => {
        if(res.data !== 'Failed login'){
          console.log("this is response from login: ", res);
          localStorage.setItem("token", res.data.token)
          props.setLoggedIn(true)
          history.push('/')
        } else {
          setErrorMsg('invalid login')
          history.push('/login')
        }
      })
      .catch((err) => {
        console.log("Received an error from login: ", err);
      });

  }



  return (
    <div className="bg">
      <div className="Login">
        {errorMsg}
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
        </Button>
          <NavLink className="navbar-item" activeClassName="is-active" to="/register">
            Not a member? Register Now!
        </NavLink>
        </Form>

      </div>
    </div>
  );
}