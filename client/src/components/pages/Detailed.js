import React from "react";
import "../../App.css";
import Post from "../Post";


export default function Detailed() {
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
            path="/detailed"
          />
        </ul>
      </div>
    </div>
  </div>
  
    );
}

