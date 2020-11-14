import React from "react";

const Sidebar = () => {
  return (
    <div class="containerRight">
      <div class="search">
        <div class="search-title">
          <label for="input-search">Search</label>
        </div>
        <input
          class="input-search"
          type="text"
          name="q"
          id="input-search"
          placeholder="Title Search"
        />
        <button class="searchBtn" id="submit-search">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="categories">
        <div class="category-title">
          <a>Categories</a>
        </div>
        <div class="category-contents"></div>
        <ul class="category-list">
          <li>
            <a href="#">AWS</a>
          </li>
          <li>
            <a href="#">GCP</a>
          </li>
          <li>
            <a href="#">JavaScript</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
