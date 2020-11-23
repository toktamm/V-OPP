import React from "react";
import Post from "./Post";

import "./Posts.css";

function Posts(props) {
  const { postData } = props;

  const posts = postData
    ? postData.map((postData, index) => {
        return (
          <div className="posts__container">
            <Post
              key={index}
              src={postData.src}
              title={postData.title}
              text={postData.text}
              detail={postData.detail}
            />
          </div>
        );
      })
    : "There is no post here";

  return [posts];
}

export default Posts;
