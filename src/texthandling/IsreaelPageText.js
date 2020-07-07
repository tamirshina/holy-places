import React, { useContext, useEffect, useState } from "react";
import LangContext from "../LangContext";
import "../App.css";

function IsraelPageText({ infoToInsert, cssForText, hebCssFortext }) {
  const lang = useContext(LangContext).lang;

  const [isRightToLeft, setIsRightToLeft] = useState(false);

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

  return (
    <div
      className={"container-to-fade"}
      style={isRightToLeft ? hebCssFortext : cssForText}
    >
      <div
        className={
          isRightToLeft
            ? "isreal-text-title heb-israel-text-title"
            : "isreal-text-title"
        }
        dangerouslySetInnerHTML={createMarkup(infoToInsert.title)}
      ></div>
      <p
        className={
          isRightToLeft
            ? "infoHeText add-to-textbox-israel-page"
            : "infoEnText add-to-textbox-israel-page"
        }
        dangerouslySetInnerHTML={createMarkup(infoToInsert.info)}
      ></p>
    </div>
  );
}

export default IsraelPageText;
