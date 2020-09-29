import React from 'react';
import './Window.scss'

const overlayOn = (overLay) => {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlayText").innerHTML = overLay;
}

const overlayOff = () => {
    document.getElementById("overlay").style.display = "none";

}

const Window = ({ windowData: { id, date, nr, text, img, open, overLay }, handleClick }) => (
    <div className="window-background" background='./img/yule.jpg'>
        <div onClick={() => handleClick(id, date)} className={open ? "front window open" : "front window"}>
            <p >{nr}</p>
        </div>
        <div className={open ? "back window open" : "window back"}>
            <p onClick={() => handleClick(id, date)}>{text}</p>
            <button className="btn btn-overlay" onClick={() => overlayOn(overLay)}>Näytä koko luukku!</button>
        </div>
        <div id="overlay" >
            <div className="window-content">
                <p id="overlayText"></p>
                <button className="btn btn-close" onClick={overlayOff}>sulje</button>
            </div>

        </div>

    </div>
)


export default Window;
