import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { IoCodeSharp } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { GrAidOption } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa6";
import "./category.scss";

const Category = ({ category }) => {
  console.log(category);
  const {
    heading,
    graphicDesign,
    coding,
    digitalMarketing,
    videoAnimation,
    msuicAudio,
    accountFinance,
    healthCare,
    dataScience,
  } = category;
  return (
    <section className="category">
      <div className="container">
        <div className="category_heading">
          <div className="heading">
            <h2>{heading}</h2>
          </div>
          <div className="icon">
            <p className="icon_style">View All</p>
            <FaArrowRightLong className="icon_style" />
          </div>
        </div>
        <div className="category_wrapper">
          <div className="category_item">
            <div className="category_icon">
              <LuPenTool className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{graphicDesign.title}</h4>
              <p>{graphicDesign.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <IoCodeSharp className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{coding.title}</h4>
              <p>{coding.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <GrAnnounce className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{digitalMarketing.title}</h4>
              <p>{digitalMarketing.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <MdOndemandVideo className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{videoAnimation.title}</h4>
              <p>{videoAnimation.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <IoMusicalNotes className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{msuicAudio.title}</h4>
              <p>{msuicAudio.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <IoStatsChart className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{accountFinance.title}</h4>
              <p>{accountFinance.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <GrAidOption className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{healthCare.title}</h4>
              <p>{healthCare.openPosition} Open Position</p>
            </div>
          </div>
          <div className="category_item">
            <div className="category_icon">
              <FaDatabase className="icon_design" />
            </div>
            <div className="category_info">
              <h4>{dataScience.title}</h4>
              <p>{dataScience.openPosition} Open Position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
