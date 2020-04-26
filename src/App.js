import React, { useState } from 'react';
import FrontPage from './FrontPage';
import LanguageButtons from './fragments/LanguageButtons';
import './App.css';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);


  const playVideo = () => {
    const videoElem = document.getElementById("zoomInVideo");
    const frontText = document.getElementById("frontPageTitle");
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
      <LanguageButtons />
    </>
  );
}

export default App;
