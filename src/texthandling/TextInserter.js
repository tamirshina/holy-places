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

  useEffect(() => {
    console.log("tamir")
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
    <div className={isRightToLeft ? "textBoxCss" : "en-text-box"}>
      {isRightToLeft ? (
        <LeftToRightTitle titleToInsert={titleToInsert()} />
      ) : (
          <RighToLeftTitle titleToInsert={titleToInsert()} />
        )}
      <p
        ref={textParaEl}
        className={isRightToLeft ? "infoHeText" : "infoEnText"}
        id="particularTextBox"
        dangerouslySetInnerHTML={createMarkup(infoToInsert())}
      ></p>
    </div>
  );
}

export default TextInserter;
