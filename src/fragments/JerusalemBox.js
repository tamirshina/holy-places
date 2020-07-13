import React, { useEffect, useState, useRef } from "react";
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
  secTitle,
}) {
  const [isTextBoxOpen, setIsTextBoxOpen] = useState(false);
  const JerusalemBoxRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      JerusalemBoxRef.current.classList.remove("hidden");
    }, waiteTime);
  }, [JerusalemBoxRef]);

  function createMarkup(str) {
    return { __html: str };
  }
  function opentextBox() {
    setIsTextBoxOpen(true);
    setTimeout(function () {
      window.addEventListener("click", closeTextBox);
    }, 1000);
  }
  function closeTextBox() {
    window.removeEventListener("click", closeTextBox);
    setIsTextBoxOpen(false);
  }

  return (
    <>
      <div
        ref={JerusalemBoxRef}
        className={"jerusalem-box container-to-fade hidden"}
        style={cssForText}
        onClick={opentextBox}
        id={id}
      >
        <h1 className={"add-to-title-jeru-box"}>{titleToInsert}</h1>
        <img src={pin} alt="pin" />
      </div>
      {isTextBoxOpen ? (
        <div style={textBoxCss} className="overlay-bold" id={id}>
          <img src={textBox} alt="textBox" />
          <div className={"text-jeru-box"} style={textStyle}>
            <p dangerouslySetInnerHTML={createMarkup(secTitle)} />
            <p dangerouslySetInnerHTML={createMarkup(infoToInsert)} />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default JerusalemBox;
