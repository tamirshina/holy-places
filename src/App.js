import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import IsraelPage from './pages/IsraelPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageButtons from './fragments/LanguageButtons';
import './App.css';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isIsraelPage, setIstIsraelPage] = useState(false);


  const HomeBtnLogic = () => {

    setIstFrontPage(true);
    setIstIsraelPage(false);
  }
  const playVideo = () => {

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
      };
      videoElem.onended = (event) => {
        setIstFrontPage(false);
      };
    }
  };
  const playIsraelVideo = () => {

    const videoElem = document.getElementById("israelPageVideo");
    const frontText = document.getElementById("frontPageText");
    if (videoElem) {
      videoElem.play();
      videoElem.onplay = (event) => {
        if (frontText) {
          frontText.classList.add("fade");
        }
        setTimeout(function () {
          // setIsIppoPage(true);
        }, 3500);
      };
      videoElem.onended = (event) => {
        setIstFrontPage(false);
      };
    }
  };


  return (
    <>
      {isFrontPage && <FrontPage playVideo={playVideo} />}
      {isIsraelPage && <IsraelPage playIsraelVideo={playIsraelVideo} />}
      {!isFrontPage && <HomeBtn HomeBtnLogic={HomeBtnLogic} />}
      <LanguageButtons />
    </>
  );
}

export default App;
