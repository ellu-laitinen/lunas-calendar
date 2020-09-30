import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { createCalendar } from './helpers'
import Window from './Window/Window';
import './App.css'

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];

  }
  return a;
};


function App() {
  const [window, setWindow] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/windows").then((response) => {
      const windows = response.data
      setWindow(shuffle(windows))
    })
  }, [])

  const handleFlipWindow = (id) => {
    /* let today = new Date().getDate(); */
    /*  console.log(today)  */
    const updatedWindows = window.map(window =>
      window.id === id  /*  && window.nr <= today */ ?
        { ...window, open: !window.open } : window

    );
    /*    if (id == id && date == today) {
          console.log('same date')
        } else {
          console.log('not same date')
        }  */

    setWindow(updatedWindows)
    console.log(new Date().toDateString())
    console.log(new Date().getDate())
    console.log(id)

  }

  useEffect(() => {
    window.length && localStorage.setItem('calendar', JSON.stringify(window));
  }, [window])

  /*  useEffect(() => {
      const calendar = localStorage.calendar
        ? JSON.parse(localStorage.calendar)
        : createCalendar();
  
      setWindow(calendar);
    }, [createCalendar]);  */

  const windowList = window.map(w =>
    <Window
      key={w.id}
      windowData={w}
      handleClick={handleFlipWindow}

    />
  )


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
      <div className="more-snow calendar-main">

        {windowList}

      </div>

    </>
  );
}

export default App;
