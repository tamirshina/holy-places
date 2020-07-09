import React, { useContext, useEffect, useState, useRef } from "react";
import LangContext from "../LangContext";
import pin from "../assets/Screen-03/PIN.png";
import "../App.css";

function JerusalemBox({
  titleToInsert,
  infoToInsert,
  cssForText,
  textBox,
  textBoxCss,
  textStyle,
  id,
  waiteTime,
}) {
  const lang = useContext(LangContext).lang;

  const [isRightToLeft, setIsRightToLeft] = useState(false);
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);
  const shina = useRef(null);

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
    setTimeout(() => {
      shina.current.classList.remove("hidden");
    }, waiteTime);
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
    <>
      <div
        ref={shina}
        className={"jerusalem-box hidden"}
        style={cssForText}
        onClick={opentextBox}
        id={id}
      >
        <h1 className={"add-to-title-jeru-box"}>{titleToInsert}</h1>
        <img src={pin} alt="pin" style={cssForText} />
      </div>
      {isTextBoxOpen ? (
        <div style={textBoxCss} className="overlay-bold" id={id}>
          <img src={textBox} alt="textBox" />
          <div className={"text-jeru-box"} style={textStyle}>
            <p dangerouslySetInnerHTML={createMarkup(infoToInsert)} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default JerusalemBox;
