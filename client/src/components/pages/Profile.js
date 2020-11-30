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
  const [applyUser, setApplyUser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      console.log("This is from Posts.js data ------- ", data);
      setUserPost(data.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/apply").then((data) => {
      console.log("This is from Apply.js data ------- ", data);
      setApplyUser(data.data);
    });
  }, []);

  // console.log("userPost is:", userPost);

  // console.log(
  //   "This is from Profile.js, ------------ props.user.id =   ",
  //   props.user.id
  // );
  // console.log(
  //   "AND this is also from Profile.js, ------------ apply_users.user_id =   ",
  //   apply_users.user_id
  // );

  console.log("applyUser --------", applyUser);
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
            <u>Positions available:</u> {key.description}
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
          <br />
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
              decline
            </button>
          </Link>
          <br />
          <br />
        </div>
      );
    });

  // USERS APPLIED VOLUNTEER

  const volunteeredApplications = applyUser
    .filter((post) => post.users_id === props.user.id)
    .map((key) => {
      return (
        <div className="profile__current__postings">
          <h6>
            <u>Title:</u> {key.title}
          </h6>
          <h6>
            <u>Organization:</u> {key.organization}
          </h6>
          <h6>
            <u>Description:</u> {key.description}
          </h6>
          <br />
          <br />
          <Link
            to={`/detailed/${key.post_id}`}
            className="profile__item__link"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{ outline: "none" }}
              onClick={() => props.setEachPostId(key.post_id)}
              className="profile__volunteer__btn"
            >
              view
            </button>
          </Link>

          <br />
          <br />
        </div>
      );
    });

  return (
    <>
      <div class="parent">
        <section className="profile__card">
          <Accordion>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src="images/img-6.jpg" />
              <Card.Body>
                <Card.Title>↓↓The best volunteer ever↙↙ </Card.Title>
                <Card.Title>{props.user.first_name}</Card.Title>
              </Card.Body>
            </Card>
          </Accordion>
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
          </Table>

          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Current Volunteer Postings
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>{eachUsersPosts}</Card.Body>
              </Accordion.Collapse>
            </Card>

            {/* PENDING VOLUNTEER APPLICATION */}

            {/* <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Pending Applications
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {eachUsersApplication}
                </Card.Body>
              </Accordion.Collapse>
            </Card> */}

            {/* APPLIED VOLUNTEER OPPORTUNITIES */}

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Applied Volunteer Applications
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>{volunteeredApplications}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </section>
      </div>
    </>
  );
}
