import React from 'react';
import './Hatch.css'

const overlayOn = (overLay) => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayText").innerHTML = overLay;
}

const overlayOff = () => {
    document.getElementById("overlay").style.display = "none";
}

const Hatch = ({ hatchData: { id, date, nr, text, img, open, overLay }, handleClick }) => (
    <div className="hatch-background" frontBackground='./img/yule.jpg'>
        <div onClick={() => handleClick(id, date)} className={open ? "front hatch open" : "front hatch"}>
            <p >{nr}</p>
        </div>
        <div className={open ? "back hatch open" : "hatch back"}>
            <p onClick={() => handleClick(id, date)}>{text}</p>
            <button className="overlay-btn" onClick={() => overlayOn(overLay)}>full text</button>
        </div>
        <div id="overlay" >
            <div className="hatch-content">
                <p id="overlayText"></p>
                <button className="closebutton" onClick={overlayOff}>close</button>
            </div>

        </div>

    </div>
)


export default Hatch;
