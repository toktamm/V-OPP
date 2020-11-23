import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./FindPost.css";

function FindPost() {
  return (
    <div className="findpost-container">
      <span className="btn-container">
        <Link to="/findpage" className="">
          <button className="find-btn">find opportunities</button>
        </Link>
        <Link to="/postpage" className="">
          <button className="post-btn">post opportunities</button>
        </Link>
      </span>
    </div>
  );
}

export default FindPost;
