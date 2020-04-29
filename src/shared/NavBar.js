import React from "react";
import logo from "../assets/img/logo.png";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="/#">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <span className="ml-2">Tic Tac Toe</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
