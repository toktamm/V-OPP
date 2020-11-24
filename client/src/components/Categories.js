import React from "react";

import "./Categories.css";

function Categories() {
  return (
    <div className="categories__container">
      <div className="categories__icons">
        <div className="categories__grp">
          <i class="fas fa-palette"></i>
          Arts/Culture
        </div>
        <div className="categories__grp">
          <i class="fas fa-dog"></i>
          Animals
        </div>
        <div className="categories__grp">
          <i class="fas fa-child"></i>
          Children/Youth
        </div>
        <div className="categories__grp">
          <i class="fas fa-users"></i>
          Community
        </div>
        <div className="categories__grp">
          <i class="fas fa-cloud-showers-heavy"></i>
          Disaster/Relief
        </div>
        <div className="categories__grp">
          <i class="fas fa-university"></i>
          Education
        </div>
        <div className="categories__grp">
          <i class="fas fa-tree"></i>
          Environment
        </div>
        <div className="categories__grp">
          <i class="fas fa-church"></i>
          Religious
        </div>
        <div className="categories__grp">
          <i class="fas fa-hospital"></i>
          Health
        </div>
        <div className="categories__grp">
          <i class="fas fa-male"></i>
          Seniors
        </div>
        <div className="categories__grp">
          <i class="fas fa-futbol"></i>
          Sports
        </div>
      </div>
    </div>
  );
}
export default Categories;
