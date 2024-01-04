import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
   <>
     <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_first_detailes">
            <div className="foot_logo">
            <picture>
              <img src="footer_logo.png" alt="Note Pound" /> 
            </picture>
            </div>
            <h4>Call now:<NavLink to="tel:+8801700964512">+8801700964512</NavLink></h4>
            <p>1212, Badda, Dhaka, Bangladesh</p>
          </div>
          <div className="footer_detailes">
            <h3>Quick Link</h3>
            <div className="footer_item">
              <ul>
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>contact</NavLink>
                </li>
                <li>
                  <NavLink>pricing</NavLink>
                </li>
                <li>
                  <NavLink>blog</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_detailes">
            <h3>Candidate</h3>
            <div className="footer_item">
              <ul>
                <li>
                  <NavLink>Browse Jobs</NavLink>
                </li>
                <li>
                  <NavLink>Browse Employers</NavLink>
                </li>
                <li>
                  <NavLink>Candidate Dashboard</NavLink>
                </li>
                <li>
                  <NavLink>Saved Jobs</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_detailes">
            <h3>Employers</h3>
            <div className="footer_item">
              <ul>
                <li>
                  <NavLink>Post a Job</NavLink>
                </li>
                <li>
                  <NavLink>Browse Candidates</NavLink>
                </li>
                <li>
                  <NavLink>Employers Dashboard</NavLink>
                </li>
                <li>
                  <NavLink>Applications</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_detailes">
            <h3>Support</h3>
            <div className="footer_item">
              <ul>
                <li>
                  <NavLink>Faqs</NavLink>
                </li>
                <li>
                  <NavLink>Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink>Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright">
      <div className="container">
        <div className="copy_main">
          <div>
          <p>@ 2024 Jobpilot - Job Portal. All rights Reserved</p>
          </div>
          <div className="copy_social">
            <ul>
              <li>
                  <NavLink to="https://www.facebook.com/" target="_blank"><FaFacebookF /></NavLink>
                  <NavLink to="https://www.linkedin.com/" target="_blank"><FaLinkedin /></NavLink>
                  <NavLink to="https://www.instagram.com/" target="_blank"><IoLogoInstagram /></NavLink>
                  <NavLink to="https://twitter.com/"  target="_blank"><FaTwitter /></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Footer;
