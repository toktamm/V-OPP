import React, { useState, useEffect } from "react";
import Axios from "axios";
// import Post from "./Post";
import { Link } from "react-router-dom";

import "./Posts.css";

// function Posts(props) {
//   const { postData } = props;

//   const posts = postData
//     ? postData.map((postData, index) => {
//         return (
//           <div className="posts__container">
//             <Post
//               key={index}
//               src={postData.src}
//               title={postData.title}
//               text={postData.text}
//             />
//           </div>
//         );
//       })
//     : "There is no post here";

//   return [posts];
// }

// export default Posts;

function Posts(props) {
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      console.log("posts ------- ", data);
      setpostList(data.data);
    });
  }, []);
  return (
    <div className="posts__container">
      {postList.map((key, val) => {
        return (
          <li className="posts__item">
            <div className="posts__wrapper">
              <ul className="posts__items"></ul>
              <figure className="posts__item__pic-wrap">
                <img
                  className="posts__item__img"
                  src={key.thumbnail_photo_url}
                  alt="description"
                />
                <div className="posts__item__info">
                  <h5 className="posts__item__title">{key.title}</h5>
                  <h6 style={{ textDecoration: "underline" }}>
                    {key.organization}
                  </h6>
                  <h5 className="posts__item__text">
                    {key.description.length > 200
                      ? key.description.substring(0, 200) + " ..."
                      : key.description}
                  </h5>
                  <h1></h1>
                  <Link
                    to={`/detailed/${key.id}`}
                    className="posts__item__link"
                    style={{ textDecoration: "none" }}
                  >
                    <button onClick={() => props.setEachPostId(key.id)} className="posts__volunteer__btn">Volunteer</button>
                  </Link>
                </div>
              </figure>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Posts;
