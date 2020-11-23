import React from "react";
import "./Post.css";

import { Link } from "react-router-dom";

function Post(props) {
  const { src, title, text } = props;

  return (
    <>
      {src && title && text && (
        <li className="posts__item">
          {/* <div className="posts"> */}

          <div className="posts__wrapper">
            <ul className="posts__items"></ul>
            <figure className="posts__item__pic-wrap">
              <img className="posts__item__img" src={src} alt="description" />
              <div className="posts__item__info">
                <h5 className="posts__item__title">{title}</h5>
                <h5 className="posts__item__text">{text}</h5>
                <Link
                  to="/detailed"
                  className="posts__item__link"
                  style={{ textDecoration: "none" }}
                >
                  <button className="posts__volunteer__btn">volunteer</button>
                </Link>
              </div>
            </figure>
          </div>

          {/* </div> */}
        </li>
      )}
    </>
  );
}

export default Post;
