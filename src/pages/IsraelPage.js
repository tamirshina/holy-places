import React, { useContext, useRef, useEffect } from "react";
import background from "../assets/Screen-02/02-background.png";
import israelVideo from "../assets/Screen-02/01-transion-israel.mp4";
import LangContext from "../LangContext";
import russianText from "../texthandling/RussianText";
import englishText from "../texthandling/EnglishText";
import hebrewText from "../texthandling/HebrewText";
import jerusalemImg from "../assets/Screen-02/03-jerusalem.png";
import "../App.css";
import IsraelTextInserter from "../texthandling/IsreaelPageText";

function IsraelPage({ playIsraelVideo }) {
  const { lang } = useContext(LangContext);
  const jeruImg = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      jeruImg.current.classList.remove("hidden");
    }, 500);
  }, [jeruImg]);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return englishText;
    } else {
      return russianText;
    }
  }
  function handelClick() {
    jeruImg.current.classList.add("fade");
    playIsraelVideo();
  }

  function haifaInfoToInsert() {
    return whichFileToUse().IsraelPage.haifa;
  }
  function seaOfGaliliInfoToInsert() {
    return whichFileToUse().IsraelPage.seaOfGalili;
  }
  const cssForHaifa = {
    position: "fixed",
    top: "12%",
    left: "15%",
    width: "520px",
    height: "331px",
  };
  const cssHeForHaifa = {
    position: "fixed",
    top: "11%",
    left: "15%",
    width: "520px",
    height: "405px",
  };
  const cssForSeaOfGalili = {
    position: "fixed",
    top: "58%",
    right: "5%",
    width: "558px",
    height: "242px",
  };

  const cssForScrollIconHaifa = {
    position: "relative",
    float: "right",
    bottom: "24%",
    left: "36px",
    height: "56px",
  };
  const cssForScrollIconGalili = {
    position: "relative",
    float: "right",
    bottom: "33%",
    left: "19px",
    height: "56px",
  };

  return (
    <>
      <video
        poster={background}
        id="israelPageVideo"
        src={israelVideo}
        className="fullBackground"
      />
      <img
        src={jerusalemImg}
        onClick={handelClick}
        ref={jeruImg}
        className="jerusalem-icon hidden"
        alt="hand arrow"
      />
      <IsraelTextInserter
        infoToInsert={haifaInfoToInsert()}
        cssForText={cssForHaifa}
        hebCssFortext={cssHeForHaifa}
        cssForScrollIcon={cssForScrollIconHaifa}
      />
      <IsraelTextInserter
        infoToInsert={seaOfGaliliInfoToInsert()}
        cssForText={cssForSeaOfGalili}
        hebCssFortext={cssForSeaOfGalili}
        cssForScrollIcon={cssForScrollIconGalili}
      />
    </>
  );
}

export default IsraelPage;
