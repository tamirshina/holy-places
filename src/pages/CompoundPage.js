import React, { useContext } from "react";
import background from "../assets/compound-screen/Russian-Compound_background2.png";
import LangContext from "../LangContext";
import russianText from "../texthandling/RussianText";
import englishText from "../texthandling/EnglishText";
import hebrewText from "../texthandling/HebrewText";
import "../App.css";
import JerusalemBox from "../fragments/JerusalemBox";

function CompoundPage() {
  const { lang } = useContext(LangContext);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText.russianSqure.itemsArray;
    }
    if (lang === "english") {
      return englishText.russianSqure.itemsArray;
    } else {
      return russianText.russianSqure.itemsArray;
    }
  }

  return (
    <>
      <img
        id="israelPageVideo"
        src={background}
        className="fullBackground"
        alt="backgroundPic"
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
            extraStyle={item.extraStyle}
          />
        );
      })}
    </>
  );
}

export default CompoundPage;
