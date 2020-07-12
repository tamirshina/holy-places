import React, { useContext } from "react";
import background from "../assets/Screen-03/03-background.png";
import LangContext from "../LangContext";
import russianText from "../texthandling/RussianText";
import englishText from "../texthandling/EnglishText";
import hebrewText from "../texthandling/HebrewText";
import CompoundBox from "../fragments/CompoundBox";
import jerusalemVideo from "../assets/compound-screen/transition-russian-compound.mp4";
import "../App.css";
import JerusalemBox from "../fragments/JerusalemBox";

function JerusalemPage({ moveToCompoundPage }) {
  const { lang } = useContext(LangContext);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText.JerusalemPage;
    }
    if (lang === "english") {
      return englishText.JerusalemPage;
    } else {
      return russianText.JerusalemPage;
    }
  }
  return (
    <>
      <video
        poster={background}
        id="jerusalemPageVideo"
        src={jerusalemVideo}
        className="fullBackground"
      />
      {whichFileToUse().map((item) => {
        return (
          <JerusalemBox
            key={item.name}
            titleToInsert={item.title}
            infoToInsert={item.info}
            cssForText={item.cssForPosition}
            textBox={item.imageBox}
            textBoxCss={item.positonForTextBox}
            textStyle={item.textStyle}
            id={item.name}
            waiteTime={item.waiteTime}
            secTitle={item.secTitle}
          />
        );
      })}
      <CompoundBox moveToCompoundPage={moveToCompoundPage} />
    </>
  );
}

export default JerusalemPage;
