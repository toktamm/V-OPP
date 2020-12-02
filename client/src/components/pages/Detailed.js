// import React from "react";
// import "../Posts.css";
// import "../../App.css";
import "./Detailed.css";

import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import Posts from "../Posts";
import Map from "../Map";

import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";

export default function Detailed(props) {
  // delete the following line if everything is working
  // export default function Detailed({ eachPostId }) {

  // console.log("eachPostId on the Detailed is", eachPostId);
  // console.log("pathname", window.location.pathname);

  const history = useHistory();

  // handleSubmit = SAVES 'APPLIED VOLUNTEER APPLICATION' ON PROFILE PAGE

  function handleSubmit(event) {
    event.preventDefault();
    let users_id = props.user.id;
    let post_id = props.eachPostId;
    let data = {
      users_id,
      post_id,
    };
    return Axios.post("http://localhost:3001/api/apply", data)
      .then((respond) => {
        console.log("this is respond: ", respond);
        history.push("/");
      })
      .catch((err) => {
        console.log("Got an error: ", err);
      });
  }

  const [postList, setpostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      setpostList(data.data);
    });
  }, []);

  // // this function is not being used
  // const getPostTitle = (postId) => {
  //   if (postList.length > 0) {
  //     // console.log("postList is this:", postList)
  //     return postList[postId].title;
  //   } else {
  //     return "";
  //   }
  // }

  const detailedPost = postList.find((post) => post.id === props.eachPostId);

  // for eachPostId (old)
  // console.log("postList in Detailed is:", postList)
  // const detailedPost = postList.find(post => post.id === eachPostId);
  // console.log("detailedPost on the Detailed is:", detailedPost)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <li className="posts__item">
      <div className="posts__wrapper">
        <ul className="posts__items"></ul>
        <figure className="posts__item__pic-wrap">
          <img
            className="posts__item__img"
            src={detailedPost?.thumbnail_photo_url}
            alt="description"
          />
          <div className="posts__item__info">
            <h5 className="posts__item__title">{detailedPost?.title}</h5>
            <h6 style={{ textDecoration: "underline" }}>
              {detailedPost?.organization}
            </h6>
            <h5 className="posts__item__text">{detailedPost?.description}</h5>
            <h6 className="posts__item__address">
              {detailedPost?.street}, {detailedPost?.city},{" "}
              {detailedPost?.province}, {detailedPost?.post_code}
            </h6>
            <h6 className="posts__item__positions">
              Positions Available: {detailedPost?.positions_available}
            </h6>
            {/* <button className="posts__volunteer__btn">Volunteer</button>
            <button className="posts__volunteer__btn">Contact Us</button> */}

            <Button
              variant="primary"
              onClick={handleShow}
              className="posts__volunteer__btn"
              block
              size="lg"
              type="submit"
            >
              Volunteer
            </Button>
            {/* <Button
              className="posts__volunteer__btn"
              block
              size="lg"
              type="submit"
            >
              Contact Us
            </Button> */}

            <Modal show={show} onHide={handleClose} className="detailed__modal">
              <Modal.Header closeButton>
                <Modal.Title>Volunteer Opportunities</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Thank you {props.user.first_name} {props.user.last_name} for
                your interest! {detailedPost?.organization} will be in contact
                with you soon!
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="detailed__button"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={(handleClose, handleSubmit)}
                  className="detailed__button"
                >
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>

            <br />
            <Map eachPostId={props.eachPostId} detailedPost={detailedPost} />
          </div>
        </figure>
      </div>
    </li>
  );
}
