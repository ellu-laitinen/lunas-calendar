import React, { useState, useEffect } from 'react';

import { StyledApp } from './AppStyles'
import { createCalendar } from './helpers'
import Window from './Window';
import './App.css'


function App() {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    windows.length && localStorage.setItem('calendar', JSON.stringify(windows));
  }, [windows])

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setWindows(calendar);
  }, []);

  // store calendar in local storage

  /**/

  const handleFlipWindow = (id) => {
    /*   let today = new Date().getDate();
      console.log(today) */
    const updatedWindows = windows.map(window =>
      window.id === id /* && window.nr === today */ ?
        { ...window, open: !window.open } : window

    );
    /*     if (id == id && date == today) {
          console.log('same date')
        } else {
          console.log('not same date')
        } */

    setWindows(updatedWindows)
    /*     console.log(new Date().toDateString())
        console.log(new Date().getDate())
        console.log(id)
     */
  }


  return (
    <>
      <div>
        <h1 className="title">Tarinakalenteri</h1>
      </div>
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">
          ❅
  </div>
        <div className="snowflake">
          ❅
  </div>
        <div className="snowflake">
          ❆
  </div>
        <div className="snowflake">
          ❄
  </div>
        <div className="snowflake">
          ❅
  </div>
        <div className="snowflake">
          ❆
  </div>
        <div className="snowflake">
          ❄
  </div>
        <div className="snowflake">
          ❅
  </div>
        <div className="snowflake">
          ❆
  </div>
        <div className="snowflake">
          ❄
  </div>
      </div>
      <StyledApp className="more-snow">

        {windows.map(window =>
          <Window
            key={window.id}
            windowData={window}
            handleClick={handleFlipWindow}

          />)}

      </StyledApp>

    </>
  );
}

export default App;
