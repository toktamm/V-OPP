import React from "react";
import { Link } from "react-router-dom";

function Post(props) {
  return (
    <>
      <li className="posts__item">
        <Link className="posts__item__link" to={props.path}>
          <figure className="posts__item__pic-wrap" data-category={props.label}>
            <img className="posts__item__img" src={props.src} />
            <div className="posts__item__info">
              <h5 className="posts__item__title">{props.title}</h5>
              <h5 className="posts__item__text">{props.text}</h5>
              <h5 className="posts__item__detail">{props.detail}</h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
  );
}

export default Post;
