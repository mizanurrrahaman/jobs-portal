import React from "react";
import bannerImg from "/banner_img.png";
import Image from "../../components/img/Image";
import "./banner.scss";

const Banner = ({ bannerData }) => {
  console.log(bannerData);
  const { heroTitle, heroText } = bannerData;
  return (
    <section className="banner">
      <div className="banner_wrapper">
        <div className="banner_info">
          <h1 className="hero_title">{heroTitle}</h1>
          <p className="hero_text">{heroText}</p>
        </div>
        <div className="banner_img">
          <Image className="image" imgSrc={bannerImg} altText="Not Found" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
