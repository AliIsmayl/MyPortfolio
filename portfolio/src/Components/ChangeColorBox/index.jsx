import React, { useEffect, useState } from 'react'
import './ChangeColorBox.scss'
import { RiSettings4Line } from "react-icons/ri";
import { PiLightbulbFill } from "react-icons/pi";

function ChangeColorBox() {
    const [openChangeColorBocx, setOpenChangeColorBocx] = useState(false)
    const [mode, setMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false);

    function handleOpenChangeColorBox() {
        setOpenChangeColorBocx(!openChangeColorBocx)
    }
    const [line, setLine] = useState(false)

    function handleLine() {
        setLine(!line)
    }


    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(mode));
        document.body.classList.toggle('lightMode', mode);
    }, [mode]);

    function changeMode() {
        document.body.classList.toggle('lightMode');
        setMode(!mode);
    }
    return (
        <div className="normalBox">
            <div className={`changeColorBox ${openChangeColorBocx ? "openColor" : ""}`}>

                <div className="changeBox" onClick={handleOpenChangeColorBox}>
                    <p><RiSettings4Line /></p>
                </div>

                <div className="lampBox">
                    <div className="lamp">
                        <div className={`line ${line ? "lineHeight" : ""}`}></div>
                        {/* <div className="circle" onClick={handleLine}></div> */}
                        <div className="circle"
                            onClick={() => {
                                changeMode();
                                handleLine();
                              }}></div>
                </div>
                <div className="bulbBox">
                    <div className="line"></div>
                    <div className={`bulb ${line ? "bulbLight" : ""}`}>
                        <PiLightbulbFill />
                    </div>
                </div>
            </div>
            <div className="lightBackBox">
                <div className="langBox">
                    <p>Aze</p>
                    <p>Eng</p>
                </div>
            </div>
        </div>


        </div >

    )
}

export default ChangeColorBox