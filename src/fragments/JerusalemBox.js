import React, { useContext, useEffect, useState } from "react";
import LangContext from "../LangContext";
import pin from "../assets/Screen-03/PIN.png";
import "../App.css";

function JerusalemBox({ titleToInsert, infoToInsert, cssForText, textBox }) {
  const lang = useContext(LangContext).lang;

  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);

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
  function opentextBox() {
    console.log("shinnaaa");
    setIsTextBoxOpen(true);
    setTimeout(function () {
      window.addEventListener("click", closeTextBox);
    }, 1000);
  }
  function closeTextBox() {
    console.log("tamirr");
    window.removeEventListener("click", closeTextBox);
    setIsTextBoxOpen(false);
  }

  return (
    <div className={"jerusalem-box"} style={cssForText} onClick={opentextBox}>
      <h1 className={"add-to-title-jeru-box"}>{titleToInsert}</h1>
      <img src={pin} alt="pin" style={cssForText} />
      {isTextBoxOpen ? (
        <div>
          <img src={textBox} alt="textBox" className={"text-bos-jeru"} />
          <div dangerouslySetInnerHTML={createMarkup(infoToInsert)} />
        </div>
      ) : null}
    </div>
  );
}

export default JerusalemBox;
