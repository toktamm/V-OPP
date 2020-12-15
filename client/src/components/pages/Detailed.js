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
  const history = useHistory();

  // handleSubmit = SAVES 'APPLIED VOLUNTEER APPLICATION' ON PROFILE PAGE

  function handleSubmit(event) {
    event.preventDefault();
    let users_id = props?.user?.id;
    let post_id = props?.eachPostId;
    let data = {
      users_id,
      post_id,
    };
    setPositions(positions - 1);


    return Axios.post("http://localhost:3001/api/apply", data)
      .then((respond) => {
        console.log("this is respond: ", respond);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("Got an error: ", err);
      });
  }

  const [postList, setpostList] = useState([]);
  const detailedPost = postList.find((post) => post.id === props.eachPostId);

  const [positions, setPositions] = useState(detailedPost?.positions_available);
  useEffect(() => {
    setPositions(detailedPost?.positions_available);
  }, [detailedPost]);

  const detailedPost = postList.find((post) => post.id === props.eachPostId);


  const [positions, setPositions] = useState(detailedPost?.positions_available);

  useEffect(() => {
    setPositions(detailedPost?.positions_available)
  }, [detailedPost]);





  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      setpostList(data.data);
      console.log("data from axios is: ", data);

    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="posts__item">
      <img
        className="posts"
        src={detailedPost?.thumbnail_photo_url}
        alt="description"
      />
      <ul className="posts__items"></ul>

      <div className="posts__text">
        <div className="parent">
          <div className="description">
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
              Positions Available: {positions}
            </h6>

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
          </div>
          <div className="map">
            <Map eachPostId={props.eachPostId} detailedPost={detailedPost} />
          </div>
        </div>
        <Modal show={show} onHide={handleClose} className="detailed__modal">
          <Modal.Header closeButton>
            <Modal.Title>
              {detailedPost?.organization} - {detailedPost?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you {props.user.first_name} {props.user.last_name} for your
            interest! By clicking Confirm you are submitting your application
            for our review.
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
      </div>
    </div>
  );
}
