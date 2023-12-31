import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <h2>Jobportal</h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <li>
                <NavLink>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
