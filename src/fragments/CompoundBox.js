import React, { useContext } from "react";
import LangContext from "../LangContext";
import russianText from "../texthandling/RussianText";
import englishText from "../texthandling/EnglishText";
import hebrewText from "../texthandling/HebrewText";
import clickPoint from "../assets/click-point.png";
import "../App.css";

function CompoundBox({ moveToCompoundPage }) {
  const { lang } = useContext(LangContext);

  function infoToInsert() {
    if (lang === "hebrew") {
      return hebrewText.russianSqure;
    }
    if (lang === "english") {
      return englishText.russianSqure;
    } else {
      return russianText.russianSqure;
    }
  }

  return (
    <div
      className={"click-point-container container-to-fade"}
      style={infoToInsert().position}
    >
      <div className="click-point-title-container">
        <h1>{infoToInsert().title}</h1>
      </div>
      <img
        src={clickPoint}
        alt="click point"
        onClick={moveToCompoundPage}
        className={"click-point"}
      />
    </div>
  );
}

export default CompoundBox;
