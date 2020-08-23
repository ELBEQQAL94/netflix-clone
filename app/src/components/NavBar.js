import React from "react";
import NetflixLogo  from "../images/netflixlogo.png";
import Avatar  from "../images/avatar.png";

// Styles
import "./NavBar.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="netflix__container">
        <img
          className="netflix__img"
          src={NetflixLogo}
          alt="netflix"
          title="netflix"
        />
      </div>
      <div className="user__box">
        <img
          className="netflix__img"
          src={Avatar}
          alt="netflix"
          title="netflix"
        />
      </div>
    </nav>
  );
};

export default NavBar;
