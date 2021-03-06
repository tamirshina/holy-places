import React, { useState, useEffect } from "react";
import { timer, removeTimer } from "./TimerHundler";
import FrontPage from "./pages/FrontPage";
import IsraelPage from "./pages/IsraelPage";
import HomeBtn from "./fragments/HomeBtn";
import LanguageButtons from "./fragments/LanguageButtons";
import CompoundPage from "./pages/CompoundPage";
import JerusalemPage from "./pages/JerusalemPage";
import BackBtn from "./fragments/BackBtn";
import "./App.css";

function App() {
  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isIsraelPage, setIstIsraelPage] = useState(false);
  const [isJerusalemPage, setIsJerusalemPage] = useState(false);
  const [isCompoundPage, setIsCompoundPage] = useState(false);
  const [showBtns, setShowBtns] = useState(true);
  const [showLngBtns, setShowLangBtns] = useState(true);

  useEffect(() => {
    window.addEventListener("click", resetTimer);
    window.addEventListener("contextmenu", blockContextMenu);

    return () => {
      window.removeEventListener("click", resetTimer);
    };
    // eslint-disable-next-line
  }, []);

  const blockContextMenu = (evt) => {
    evt.preventDefault();
  };

  const resetTimer = () => {
    removeTimer();
    timer(homeBtnLogic);
  };

  const homeBtnLogic = () => {
    setIstFrontPage(true);
    setIstIsraelPage(false);
    setIsJerusalemPage(false);
    setIsCompoundPage(false);
  };
  const playVideo = () => {
    document.getElementById("languagesBtnsDiv").classList.add("fade");
    const videoElem = document.getElementById("zoomInVideo");
    const frontText = document.getElementById("frontPageText");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        if (frontText) {
          frontText.classList.add("fade");
        }
        setTimeout(function () {
          setIstIsraelPage(true);
        }, 3500);
        setShowLangBtns(false);
      };
      videoElem.onended = (event) => {
        setShowLangBtns(true);
        setIstFrontPage(false);
      };
    }
  };
  const playIsraelVideo = () => {
    const videoElem = document.getElementById("israelPageVideo");
    const elemntToFade = document.getElementsByClassName("container-to-fade");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        elemntToFade[0].classList.add("fade");
        elemntToFade[1].classList.add("fade");
        setShowBtns(false);
        setTimeout(function () {
          setIsJerusalemPage(true);
        }, 2500);
      };
      videoElem.onended = (event) => {
        setIstIsraelPage(false);
        setShowBtns(true);
      };
    }
  };
  const playCompoundVideo = () => {
    const videoElem = document.getElementById("jerusalemPageVideo");
    const elemntToFade = document.getElementsByClassName("container-to-fade");
    for (let index = 0; index < elemntToFade.length; index++) {
      elemntToFade[index].classList.add("fade");
    }
    if (videoElem) {
      setTimeout(function () {
        videoElem.play();
      }, 200);
      videoElem.onplay = (event) => {
        setShowBtns(false);
        setTimeout(function () {
          setIsCompoundPage(true);
        }, 2500);
      };
      videoElem.onended = (event) => {
        setIsJerusalemPage(false);
        setShowBtns(true);
      };
    }
  };

  const backBtnLogic = () => {
    if (isJerusalemPage) {
      setIstIsraelPage(true);
      setIsJerusalemPage(false);
    } else {
      setIsJerusalemPage(true);
      setIsCompoundPage(false);
    }
  };

  const moveToCompoundPage = () => {
    playCompoundVideo();
  };

  return (
    <>
      {isFrontPage && <FrontPage playVideo={playVideo} />}
      {isIsraelPage && (
        <IsraelPage
          playIsraelVideo={playIsraelVideo}
          homeBtnLogic={homeBtnLogic}
        />
      )}
      {isJerusalemPage && (
        <JerusalemPage
          moveToCompoundPage={moveToCompoundPage}
          homeBtnLogic={homeBtnLogic}
        />
      )}
      {isCompoundPage && <CompoundPage homeBtnLogic={homeBtnLogic} />}
      {!isFrontPage && showBtns && <HomeBtn homeBtnLogic={homeBtnLogic} />}
      {!isFrontPage && !isIsraelPage && showBtns && (
        <BackBtn backBtnLogic={backBtnLogic} />
      )}
      {showLngBtns && <LanguageButtons />}
    </>
  );
}

export default App;
