import React from "react";

const Image = (props) => {
  console.log(props);
  return <img src={props.imgSrc} alt={props.altText} />;
};

export default Image;
