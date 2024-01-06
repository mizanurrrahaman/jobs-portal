import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Find Job</NavLink>
              </li>
              <li>
                <NavLink>Employers</NavLink>
              </li>
              <li>
                <NavLink to="/dashbord">Dashbord</NavLink>
              </li>
              <li>
                <NavLink>Pricing Plans</NavLink>
              </li>
              <li>
                <NavLink>Customer Supports</NavLink>
              </li>
            </ul>
          </div>
          <div className="phone_language">
            <div className="phone_info">
              <FaPhoneVolume className="phone_number" />
              <Link className="phone_number" href="tel:+1-202-555-0178">
                +1-202-555-0178
              </Link>
            </div>
            <div className="phone_info">
              <img
                style={{ height: "16px", width: "24px" }}
                src="https://flagcdn.com/w320/us.png"
                alt=""
              />
              <span className="english">English</span>{" "}
              <SlArrowDown className="down_arrow" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
