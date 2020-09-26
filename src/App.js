import React, { useState, useEffect } from 'react';

import { StyledApp } from './AppStyles'
import { createCalendar } from './helpers'
import Hatch from './Hatch';
import './App.css'




function App() {
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches])

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setHatches(calendar);
  }, []);

  // store calendar in local storage

  /**/

  const handleFlipHatch = id => {
    const updatedHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    );
    setHatches(updatedHatches)
    console.log(id)
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

        {hatches.map(hatch =>
          <Hatch
            key={hatch.id}
            hatchData={hatch}
            handleClick={handleFlipHatch}

          />)}

      </StyledApp>

    </>
  );
}

export default App;
