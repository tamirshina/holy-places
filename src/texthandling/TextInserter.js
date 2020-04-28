import React, { useContext, useRef, useEffect, useState } from "react";
import LangContext from "../LangContext";
import russianText from "./russianText";
import englishText from "./englishText";
import hebrewText from "./HebrewText";
import RighToLeftTitle from "../fragments/RightToLeftTitle";
import LeftToRightTitle from "../fragments/LeftToRightTitle";
import "../App.css";

function TextInserter() {
  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);

  const [isRightToLeft, setIsRightToLeft] = useState(false);

  const text = `
  Between 1850 and 1917, the Russian Empire and the Russian Church erected dozens of buildings throughout the Middle East and Palestine in particular. During these years, the industrial revolution and the progress that swept the Western world tends to reach our regions.
  The Russian people during these years felt a deep connection with the Land of Israel and the holy sites of Christianity.
   Many funds and resources were invested in Palestine by the Russian government and people, construction of churches and monasteries, infrastructure and a growing pilgrimage of Russian trainers who make pilgrimages to Jerusalem every year.
  All of these contributed greatly to the development of the Land of Israel. The impact of this activity is still evident today, as beautiful churches adorn the landscape of the country and the big cities.`;

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
  }, [lang]);

  function createMarkup(str) {
    return { __html: str };
  }

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return JSON.parse(JSON.stringify(englishText));
    } else {
      return JSON.parse(JSON.stringify(russianText));
    }
  }

  function infoToInsert() {
    return whichFileToUse().particularInfo.humanitarian;
  }
  function titleToInsert() {
    return whichFileToUse().titles.humanitarian;
  }

  return (
    <div id="frontPageText" className={"container-to-fade"}>
      <div className={isRightToLeft ? "textBoxCss" : "en-text-box"}>
        {isRightToLeft ? (
          <RighToLeftTitle titleToInsert={titleToInsert()} />
        ) : (
            <LeftToRightTitle titleToInsert={titleToInsert()} />
          )}
        <div className={isRightToLeft ? "heb-text-shape-container" : "text-shape-container"}>
          <div className={isRightToLeft ? "heb-side-shape" : "side-shape"}></div>
          <p
            ref={textParaEl}
            className={isRightToLeft ? "infoHeText" : "infoEnText"}
            id="particularTextBox"
            dangerouslySetInnerHTML={isRightToLeft ? createMarkup(infoToInsert()) : createMarkup(text)}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default TextInserter;
