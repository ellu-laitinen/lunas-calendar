import React, { useState, useEffect } from 'react';
import data from './windowData.json'
import Window from './Window/Window';
import './App.scss'

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];

  }
  return a;
};

function App() {
  const [window, setWindow] = useState([])

  const hatchData = data;

  useEffect(() => {
    let calendar = [];
    if (localStorage.calendar !== undefined) {
      calendar = JSON.parse(localStorage.calendar)
    } else {
      calendar = hatchData;

      setWindow(shuffle(calendar))

    };
    setWindow(calendar)


  }, [])

  useEffect(() => {
    window.length && localStorage.setItem('calendar', JSON.stringify(window));
  }, [window])

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
        <h1 className="title">Lasten oma joulukalenteri</h1>
      </div>
      <div className="more-snow calendar-main">

        {windowList}

      </div>

    </>
  );
}

export default App;
