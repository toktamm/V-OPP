import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";

function Categories() {
  return (
    <div className="categories__container">
      <div className="categories__icons">
        <Link
          to="/"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-home"></i>
            All
          </div>
        </Link>
        <Link
          to="/arts"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-palette"></i>
            Arts/Culture
          </div>
        </Link>
        <Link
          to="/animals"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-dog"></i>
            Animals
          </div>
        </Link>
        <Link
          to="/youth"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-child"></i>
            Children/Youth
          </div>
        </Link>
        <Link
          to="/community"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-users"></i>
            Community
          </div>
        </Link>

        <Link
          to="/disaster"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-cloud-showers-heavy"></i>
            Disaster/Relief
          </div>
        </Link>
        <Link
          to="/education"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-university"></i>
            Education
          </div>
        </Link>
        <Link
          to="/environment"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-tree"></i>
            Environment
          </div>
        </Link>
        <Link
          to="/religious"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-church"></i>
            Religious
          </div>
        </Link>
        <Link
          to="/health"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-hospital"></i>
            Health
          </div>
        </Link>
        <Link
          to="/seniors"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-male"></i>
            Seniors
          </div>
        </Link>
        <Link
          to="/sports"
          className="categories__link"
          style={{ textDecoration: "none", color: "#b1b1b1" }}
        >
          <div className="categories__grp">
            <i class="fas fa-futbol"></i>
            Sports
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Categories;
