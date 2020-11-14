import React from "react";
import { Link } from "react-router-dom";

// class Header extends React.Component {}
// function Header() {}
const Header = () => {
  const moveWindow = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    window.scrollTo({
      top: targetId === "#" ? 0 : document.querySelector(targetId).offsetTop,
      behavior: "smooth",
    });
  };
  // function handleClickEvent(event) {}
  const navbarIconClick = (e) => {
    moveWindow(e);
  };

  const toTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div class="top-bar">
      <div class="top-bar-title">
        <Link to="/">
          <h1 onClick={(e) => toTop(e)}>PF.SOOKIM.XYZ</h1>
        </Link>
      </div>
      <ul class="menu-bar">
        <li class="portfolio-icon">
          <Link to="/">
            <a
              class="portfolio-icon-link"
              href="#portfolio"
              onClick={(e) => navbarIconClick(e)}
            >
              Portfolio
            </a>
          </Link>
        </li>
        <li class="portfolio-icon">
          <Link to="/">
            <a
              class="portfolio-icon-link"
              href="#about"
              onClick={(e) => navbarIconClick(e)}
            >
              About
            </a>
          </Link>
        </li>
        <li class="portfolio-icon">
          <Link to="/">
            <a
              class="portfolio-icon-link"
              href="#contact"
              onClick={(e) => navbarIconClick(e)}
            >
              Contact
            </a>
          </Link>
        </li>
        <li class="portfolio-icon">
          <Link to="/Blog">
            <a
              class="portfolio-icon-link js-move-blog"
              onclick={(e) => toTop(e)}
            >
              Blog
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
