import React from "react";

const Appbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
      id="main-nav"
    >
      <div className="container">
        <a href="index.html" className="navbar-brand">
          TODO LIST
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Share
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
