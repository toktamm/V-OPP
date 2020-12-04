import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./FindPost.css";

function FindPost() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    token ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <div className="findpost-container">
      <span className="btn-container">
        {loggedIn ? (
          <Link to="/postpage" className="">
            <button className="post-btn">Post Opportunities</button>
          </Link>
        ) : (
          <Link to="/login" className="">
            <button className="post-btn">Post Opportunities</button>
          </Link>
        )}
      </span>
    </div>
  );
}

export default FindPost;
