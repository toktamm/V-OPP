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
  const detailedPost = postList.find(post => post.id === eachPostId);
  console.log("detailedPost is:", detailedPost)
  const post = useState("ss");



  function handleSubmit(event) {
    event.preventDefault();
 

    return Axios
      .post("http://localhost:3001/api/users", post)
      .then((res) => {
        console.log("this is data: ", post)
        console.log("this is response: ", res);
      })
      .catch((err) => {
        console.log("Received an error: ", err);
      });
  }

    return (

    // <li>{detailedPost?.title}</li>
    // <li>{detailedPost?.category}</li>
    // <li>{detailedPost?.description}</li>



    <li className="posts__item">
      <div className="posts__wrapper">
        <ul className="posts__items"></ul>
        <figure className="posts__item__pic-wrap">
          <img
            className="posts__item__img"
            src={detailedPost?.thumbnail_photo_url}
            alt="description"
          />
          <div className="posts__item__info">
            <h5 className="posts__item__title">{detailedPost?.title}</h5>
            <h6 style={{ textDecoration: "underline" }}>
              {detailedPost?.organization}
            </h6>
            <h5 className="posts__item__text">
              {detailedPost?.description}
            </h5>

            <button 
           
            >
               Volunteer</button>

            <button className="posts__volunteer__btn">Contact Us</button>

          </div>
        </figure>
      </div>
    </li>


            



  );
}
