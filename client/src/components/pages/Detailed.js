// import React from "react";
// import "../Posts.css";
// import "../../App.css";
import "./Detailed.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';


import Posts from "../Posts";
import Map from "../Map";

import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useHistory } from "react-router-dom";

export default function Detailed(props) {

  // delete the following line if everything is working
  // export default function Detailed({ eachPostId }) {

  // console.log("eachPostId on the Detailed is", eachPostId);
  // console.log("pathname", window.location.pathname);


  const history = useHistory();

  // handleSubmit = SAVES 'APPLIED VOLUNTEER APPLICATION' ON PROFILE PAGE

  function handleSubmit(event) {
    event.preventDefault();
    let users_id = props?.user?.id;
    let post_id = props?.eachPostId;
    let data = {
      users_id,
      post_id,
    };
    setPositions(positions - 1);


    return Axios.post("http://localhost:3001/api/apply", data)
      .then((respond) => {
        console.log("this is respond: ", respond);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("Got an error: ", err);
      });
  }



  const [postList, setpostList] = useState([]);

  const detailedPost = postList.find((post) => post.id === props.eachPostId);


  const [positions, setPositions] = useState(detailedPost?.positions_available);

  useEffect(() => {
    setPositions(detailedPost?.positions_available)
  }, [detailedPost]);





  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((data) => {
      setpostList(data.data);
      console.log("data from axios is: ", data);

    });
  }, []);



  // // this function is not being used
  // const getPostTitle = (postId) => {
  //   if (postList.length > 0) {
  //     // console.log("postList is this:", postList)
  //     return postList[postId].title;
  //   } else {
  //     return "";
  //   }
  // }


  // const decremenetPositions
  // if (detailedPost.positions_available > 0) {

  // }


  // for eachPostId (old)
  // console.log("postList in Detailed is:", postList)
  // const detailedPost = postList.find(post => post.id === eachPostId);
  // console.log("detailedPost on the Detailed is:", detailedPost)



  return (
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
            <h6 className="posts__item__address">
              {detailedPost?.street}, {detailedPost?.city}, {detailedPost?.province}, {detailedPost?.post_code}
            </h6>
            <h6 className="posts__item__positions">
              Positions Available: {positions}
            </h6>
            {/* <button className="posts__volunteer__btn">Volunteer</button>
            <button className="posts__volunteer__btn">Contact Us</button> */}

            <Button onClick={handleSubmit} className="posts__volunteer__btn" block size="lg" type="submit">
              Volunteer
        </Button>
            {/* <Button className="posts__volunteer__btn" block size="lg" type="submit">
              Contact Us
        </Button> */}
            <Map eachPostId={props.eachPostId} detailedPost={detailedPost} />
          </div>
        </figure>
      </div>
    </li >
  );
}
