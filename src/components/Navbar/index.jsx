import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div style={{ display: "flex" }}>
          <div className="logo">
            <img src="/assets/images/logo.png" alt="logo" />
          </div>
          <div className="ml">
            <i className="fas fa-bell bell"></i>
            <img
              className="avatar"
              src="/assets/images/personpng.png"
              alt="avatar"
            />
            <span className="personN">Taha Marwan</span>
          </div>
        </div>
        <img
          className="landing"
          src="/assets/images/Untitled.png"
          alt="landing page"
        />
      </nav>
    </>
  );
};

export default Navbar;
