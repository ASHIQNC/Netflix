import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <div style={{ width: "100%", display: "flex" }}>
        <div className="nav__button__container">
          <button className="nav__button">Home</button>
          <button className="nav__button">Tv Shows</button>
          <button className="nav__button">Movies</button>
          <button className="nav__button">My List</button>
        </div>
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
