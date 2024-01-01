import React from "react";
import Image from "../../components/img/Image";
import { IoIosSearch } from "react-icons/io";
import "./header.scss";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="logo_input">
            <div className="logo">
              <Image
                imgSrc="https://raw.githubusercontent.com/mizanurrrahaman/jobs-portal/main/public/logo.png"
                altText="Not Found"
              />
            </div>
            <div className="search_bar">
              <div className="search_option">
                <select name="country" id="" className="select_country">
                  <option className="country_name" value="Bangladesh">
                    🇧🇩 Bangladesh
                  </option>
                  <option className="country_name" value="India">
                    🇮🇳 India
                  </option>
                  <option className="country_name" value="Saudia Arabia">
                    🇸🇦 Saudi Arabia
                  </option>
                  <option className="country_name" value="Bhutan">
                    🇧🇹 Bhutan
                  </option>
                </select>
                <div className="icon_input">
                  <IoIosSearch className="serach_icon" />
                  <input
                    type="text"
                    placeholder="Job tittle, keyword, company"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="header_btn">
            <CommonBtn title="Sign In" />
            <CommonBtn title="Post A Jobs" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
