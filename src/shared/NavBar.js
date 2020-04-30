import React from "react";
import logo from "../assets/img/logo.png";
import { useHistory } from "react-router-dom";
import isAuthenticate from "../app/guard/isAuthenticated";

const signOut = (history) => {
  localStorage.clear();
  history.push("/login");
};

export const NavBar = () => {
  const history = useHistory();
  let signOutButton;
  if (isAuthenticate())
    signOutButton = (
      <li className="nav-item">
        <a className="nav-link" href="void(0)" onClick={() => signOut(history)}>
          <i className="fa fa-sign"></i> Change players / End Game
        </a>
      </li>
    );
  else signOutButton = "";

  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm  navbar-dark bg-dark">
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
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">{signOutButton}</ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
