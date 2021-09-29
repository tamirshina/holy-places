import React from "react";
import backImg from "../assets/32-back.png";
import "../App.css";

function BackBtn({ backBtnLogic }) {
  return (
    <img
      src={backImg}
      alt="backBtn"
      onClick={backBtnLogic}
      id="backBtn"
      className="backBtn"
    />
  );
}

export default BackBtn;
