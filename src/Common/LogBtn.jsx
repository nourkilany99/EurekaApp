import React from "react";
import "./LogBtn.css";

const LogBtn = ({ text, icon, onClick ,style }) => {
  return (
    <button className="logbtn" onClick={onClick} style={style}>
      {icon && <img src={icon} alt="icon" className="logbtn-icon" />}
      <span>{text}</span>
    </button>
  );
};

export default LogBtn;