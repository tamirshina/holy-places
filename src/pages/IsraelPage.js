import React, { useContext, useEffect, useState } from "react";
import background from "../assets/Screen-02/02-background.png";
import israelVideo from "../assets/Screen-02/01-transion-israel.mp4";
import LangContext from "../LangContext";
import jerusalemImg from "../assets/Screen-02/03-jerusalem.png"
import "../App.css";
import TextInserter from "../texthandling/TextInserter";

function IsraelPage({ playIsraelVideo }) {

    const { lang } = useContext(LangContext);
    const [isRightToLeft, setIsRightToLeft] = useState(false);

    useEffect(() => {
        if (lang === "hebrew") {
            setIsRightToLeft(true);
        } else {
            setIsRightToLeft(false);
        }
    }, [lang]);


    return (
        <>
            <video
                poster={background}
                id="israelPageVideo"
                src={israelVideo}
                className="fullBackground"
            />
            <img src={jerusalemImg} onClick={playIsraelVideo} className="jerusalem-icon" alt="hand arrow" />
            <TextInserter />
        </>
    );
}

export default IsraelPage;
