import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import Axios from "axios";


export default function Profile(props) {
  const [userPost, setuserPost] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      console.log("This is from Posts.js data ------- ", data);
      setuserPost(data.data);
    });
  }, []);
  return (
    <>
      <div class="parent">
        <section class="card">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="images/img-6.jpg" />
            <Card.Body>
              <Card.Title>↓↓The best volunteer ever↙↙ </Card.Title>
              <Card.Title>{props.user.first_name}</Card.Title>
            </Card.Body>
          </Card>
        </section>
        <section class="card2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.user.first_name}</td>
                <td>{props.user.last_name}</td>
                <td>{props.user.email}</td>
              </tr>
              <tr></tr>
            </tbody>
            <thead>
              <tr>
                <th colSpan="3">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">{props.user.address}</td>
              </tr>
              <tr></tr>
            </tbody>
          </Table>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Previous application{" "}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>No previous activity</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Current application
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                {props.user.post}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
        {/* <p>
          {userPost.map((post) => (
            <h1>{post.title}</h1>
          ))}
        </p> */}
      </div>
    </>
  );
}