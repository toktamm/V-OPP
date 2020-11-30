// import React from "react";
import "../../App.css";
import "../Posts.css";

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

  const detailedPost = postList.find((post) => post.id === props.eachPostId);

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
            <button onClick={handleSubmit} className="posts__volunteer__btn">
              Volunteer
            </button>
            <button className="posts__volunteer__btn">Contact Us</button>
          </div>
        </figure>
      </div>
    </li>
  );
}
