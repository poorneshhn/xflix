import React from "react";
import "./customredbutton.css";
const CustomRedButton = (props) => {
  return (
    <button className="custom-red-button" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default CustomRedButton;
