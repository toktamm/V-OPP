// import React from "react";
// import "./Community.css";

// import Categories from "../../Categories";
// import FindPost from "../../FindPost";
// import HeroSection from "../../HeroSection";

// function Sports() {
//   return (
//     <>
//       <FindPost />
//       <HeroSection />
//       <Categories />
//     </>
//   );
// }

// export default Sports;

// import React from "react";
// import "./Community.css";

// import Categories from "../../Categories";
// import FindPost from "../../FindPost";
// import HeroSection from "../../HeroSection";

// function Sports() {
//   return (
//     <>
//       <FindPost />
//       <HeroSection />
//       <Categories />
//     </>
//   );
// }

// export default Sports;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "../../Posts";
import { Link } from "react-router-dom";

import "./Community.css";
import "../../Posts.css";

import Categories from "../../Categories";
import FindPost from "../../FindPost";
import HeroSection from "../../HeroSection";

function Sports() {
  const [postList, setpostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/categories").then((data) => {
      console.log("categories posts ------- ", data);
      setpostList(data.data);
    });
  }, []);

  return (
    <>
      <FindPost />
      <HeroSection />
      <Categories />
      {console.log("This is postList:      ", postList)}
      <div className="posts__container">
        {postList
          .filter((category) => category.category === "Sports")
          .map((filteredCategory) => (
            // <h1>{filteredCategory.title}</h1>
            <li className="posts__item">
              <div className="posts__wrapper">
                <ul className="posts__items"></ul>
                <figure className="posts__item__pic-wrap">
                  <img
                    className="posts__item__img"
                    src={filteredCategory.thumbnail_photo_url}
                    alt="description"
                  />
                  <div className="posts__item__info">
                    <h5 className="posts__item__title">
                      {filteredCategory.title}
                    </h5>
                    <h6 style={{ textDecoration: "underline" }}>
                      {filteredCategory.organization}
                    </h6>
                    <h5 className="posts__item__text">
                      {filteredCategory.description.length > 200
                        ? filteredCategory.description.substring(0, 200) +
                          " ..."
                        : filteredCategory.description}
                    </h5>
                    <Link
                      to="/detailed"
                      className="posts__item__link"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="posts__volunteer__btn">
                        volunteer
                      </button>
                    </Link>
                  </div>
                </figure>
              </div>
            </li>
          ))}
      </div>
    </>
  );
}

export default Sports;
