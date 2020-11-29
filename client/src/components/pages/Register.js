import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Register.css";
import "../../App.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      first_name,
      last_name,
      email,
      password,
      phone,
      address,
    };
    return axios
      .post("http://localhost:3001/api/users", data)
      .then((res) => {
        console.log("this is response: ", res);
        localStorage.setItem("token", res.data.token);
        props.setLoggedIn(true);
        // props.setUser(data);
        props.setUser(res.data.user);
        history.push("/");
      })
      .catch((err) => {
        console.log("Received an error: ", err);
      });
  }

  return (
    <div className="bg">
      <div className="Register">
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} size="lg" controlId="username">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="First Name"
                autoFocus
                type="firstname"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} size="lg" controlId="username">
              <Form.Label></Form.Label>
              <Form.Control
                placeholder="Last Name"
                autoFocus
                type="lastname"
                value={last_name}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group size="lg" controlId="email">
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Email Address"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="phone">
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Phone Number"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="address">
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Address"
              type="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/login"
          >
            Already a member? Login Now!
          </NavLink>
        </Form>
      </div>
    </div>
  );
}
