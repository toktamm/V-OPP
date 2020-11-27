// import React from "react";
import "../../App.css";
import Posts from "../Posts";
import Map from "../Map";

import React, { useState, useEffect } from "react";
import Axios from "axios";




export default function Detailed({ eachPostId }) {

  console.log("id is", eachPostId);
  console.log("pathname", window.location.pathname);

  const [postList, setpostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      // console.log("posts ------- ", data);
      setpostList(data.data);
    });
  }, []);

  const getPostTitle = (postId) => {
    if (postList.length > 0) {
      // console.log("postList is this:", postList)
      return postList[postId].title;
    } else {
      return "";
    }
  }
  console.log("postList is:", postList)
  const theFind = postList.find(post => post.id === eachPostId);
  console.log("theFind is:", theFind)
  return (
    <div className="posts">
      <div className="posts__container">
        <div className="posts__wrapper">
          <ul className="posts__items">
            <li>{theFind?.title}</li>
            <li>{theFind?.category}</li>
            

            {/* {getPostTitle(eachPostId)} */}
            {/* <Posts /> */}
            {/* <Map /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
