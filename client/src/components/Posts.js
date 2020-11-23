import React from "react";
import "./Posts.css";
import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <div className="posts__container">
        <div className="posts__wrapper">
          <ul className="posts__items">
            <Post
              src="images/img-9.jpg"
              title="Earth Day Community Clean-Ups"
              text="On Earth Day join hundreds of high school students to clean Toronto together! Choose a location that works best for you and sign-up with your friends.On Earth Day join hundreds of high school students to clean Toronto together! Choose a location that works best for you and sign-up with your friends."
              detail="Click for more details"
              path="/detailedPost"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Posts;
