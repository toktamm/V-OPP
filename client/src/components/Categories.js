import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";

function Categories(props) {
  return (
    <div className="categories__container">
      <div className="categories__grp">
        <Link
          to="/"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
        >
          <div className="categories__text__icons">
            <i class="fas fa-home"></i>
            <p className="categories__icon"> ALL </p>
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/arts"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-palette"></i>
            <p className="categories__icon"> Arts/Culture</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/animals"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-dog"></i>
            <p className="categories__icon">Animals</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/youth"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-child"></i>
            <p className="categories__icon">Children/Youth</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/community"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-users"></i>
            <p className="categories__icon">Community</p>{" "}
          </div>
        </Link>
      </div>

      <div className="categories__grp">
        <Link
          to="/disaster"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-cloud-showers-heavy"></i>
            <p className="categories__icon">Disaster/Relief</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/education"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-university"></i>
            <p className="categories__icon"> Education</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/environment"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-tree"></i>
            <p className="categories__icon">Environment</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/religious"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-church"></i>
            <p className="categories__icon">Religious</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/health"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-hospital"></i>
            <p className="categories__icon"> Health</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/seniors"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-male"></i>
            <p className="categories__icon">Seniors</p>{" "}
          </div>
        </Link>
      </div>
      <div className="categories__grp">
        <Link
          to="/sports"
          className="categories__link"
          style={{ textDecoration: "none", color: "#75A3A3" }}
          setEachPostId={props.setEachPostId}
        >
          {" "}
          <div className="categories__text__icons">
            <i class="fas fa-futbol"></i>
            <p className="categories__icon">Sports</p>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Categories;
