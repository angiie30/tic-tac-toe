import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="/#">
            {/* <img
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            ></img> */}
            Tic Tac Toe
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
