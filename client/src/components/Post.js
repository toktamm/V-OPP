import React from "react";
import "./Post.css";

import { Link } from "react-router-dom";

function Post(props) {
  console.log("props: -------" + props);
  const { src, title, text, detail } = props;

  return (
    <>
      {src && title && text && detail && (
        <li className="posts__item">
          <Link to="/detail" className="posts__item__link">
            {/* <div className="posts"> */}

            <div className="posts__wrapper">
              <ul className="posts__items"></ul>
              <figure className="posts__item__pic-wrap">
                <img className="posts__item__img" src={src} />
                <div className="posts__item__info">
                  <h5 className="posts__item__title">{title}</h5>
                  <h5 className="posts__item__text">{text}</h5>
                  <h5 className="posts__item__detail">{detail}</h5>
                </div>
              </figure>
            </div>

            {/* </div> */}
          </Link>
        </li>
      )}
    </>
  );
}

export default Post;
