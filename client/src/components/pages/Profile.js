// import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Profile(props) {
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      console.log("This is from Posts.js data ------- ", data);
      setUserPost(data.data);
    });
  }, []);

  console.log("userPost is:", userPost);

  const eachUsersPosts = userPost
    .filter((post) => post.user_id === props.user.id)
    .map((key) => {
      return (
        <div className="profile__current__postings">
          <u>Title:</u> {key.title}
          <h6>
            <u>Organization:</u> {key.organization}
          </h6>
          <h6>
            <u>Positions available:</u> {key.positions_available}
          </h6>
          <Link
            to={`/detailed/${key.id}`}
            className="profile__item__link"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{ outline: "none" }}
              onClick={() => props.setEachPostId(key.id)}
              className="profile__volunteer__btn"
            >
              view
            </button>
          </Link>
          <br />
          <br />
          <br />
        </div>
      );
    });

  // PENDING USER APPLICATIONS - *FEATURE NEED TO IMPLEMENT

  const eachUsersApplication = userPost
    .filter((post) => post.user_id === props.user.id)
    .map((key) => {
      return (
        <div className="profile__current__postings">
          <h6>
            <u>User:</u> {key.fist_name} {key.last_name}
          </h6>
          <h6>
            <u>Email:</u> {key.email}
          </h6>
          <br />
          <Link
            to={`/detailed/${key.id}`}
            className="profile__item__link"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{ outline: "none" }}
              onClick={() => props.setEachPostId(key.id)}
              className="profile__volunteer__btn"
            >
              accept
            </button>
          </Link>
          <Link
            to={`/detailed/${key.id}`}
            className="profile__item__link"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{ outline: "none" }}
              onClick={() => props.setEachPostId(key.id)}
              className="profile__volunteer__btn"
            >
              decline
            </button>
          </Link>
          <br />
          <br />
        </div>
      );
    });

  console.log("eachUsersPosts is:", eachUsersPosts);

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
                <th>Email Address</th>
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

            {/* <thead>
              <tr>
                <th colSpan="3">Volunteer Postings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">{eachUsersPosts}</td>
              </tr>
              <tr></tr>
            </tbody> */}
          </Table>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Current Postings
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{eachUsersPosts}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Pending Applications
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {/* No application , Current Status: Not available */}
                  {eachUsersApplication}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
      </div>

      {/* {eachUsersPosts?.title} */}
      {/* {userPost.find((element) => element.city === "Toronto")} */}
      {/* {userPost.map((post) => (
            <h1>{post.user_id}</h1>
          ))} */}
      {/* {userPost.filter((val) => {
            if (val.user_id === "8") {
              return val;
            }
            return val;
          })} */}
    </>
  );
}
