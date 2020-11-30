import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Post from "./Post";
import { Link } from "react-router-dom";

import "./Posts.css";

function Posts(props) {
  const [postList, setpostList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      console.log("This is from Posts.js data ------- ", data);
      setpostList(data.data);
    });
  }, []);
  return (
    <>
      {console.log(
        "this is from Posts.js, props.user.id           " + props.id
      )}
      <div className="posts__search__container">
        {/* <i class="fas fa-search"></i> */}
        <input
          className="posts__search__input"
          style={{ outline: "none" }}
          type="text"
          placeholder="Search Opportunities"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>

      <div className="posts__container">
        {postList
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((key) => {
            return (
              <li className="posts__item">
                <div className="posts__wrapper">
                  <ul className="posts__items"></ul>
                  <figure className="posts__item__pic-wrap">
                    <img
                      className="posts__item__img"
                      src={key.thumbnail_photo_url}
                      alt="description"
                      style={{ borderRadius: "10px" }}
                    />
                    <div className="posts__item__info">
                      <h5 className="posts__item__title">{key.title}</h5>
                      <h6 style={{ textDecoration: "underline" }}>
                        {key.organization.toUpperCase()}
                      </h6>
                      <h5 className="posts__item__text">
                        {key.description.length > 200
                          ? key.description.substring(0, 200) + " ..."
                          : key.description}
                        <br />
                        <br />
                        <strong>Available Positions: </strong>
                        {key.positions_available}
                      </h5>
                      <Link
                        to={`/detailed/${key.id}`}
                        className="posts__item__link"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          onClick={() => props.setEachPostId(key.id)}
                          className="posts__volunteer__btn"
                        >
                          Volunteer
                        </button>
                      </Link>
                    </div>
                  </figure>
                </div>
              </li>
            );
          })}
      </div>
    </>
  );
}

export default Posts;
