import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { StyledApp } from './AppStyles'
import { createCalendar } from './helpers'
import Hatch from './Hatch';


const GlobalStyle = createGlobalStyle`
 html {
  background-color: #000;
    background-image: url(https://images.unsplash.com/photo-1531972497489-8eb337acf6e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=193456e9385b553747a5e0f0cbc7badb&auto=format&fit=crop&w=1334&q=80);
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
}
/*
h1 {
  font-size: 8em;
  font-family: 'Merienda One';
  font-weight: 400;
  position: fixed;
  top:50%;
  left: 0;
  right: 0;
  margin: 0;
  line-height: 1;
  transform: translateY(-50%);
  z-index: 100;
  text-shadow: 0 2px 10px rgba(black,0.8);
}
*/
body,
.more-snow {
  &:before,
  &:after {
    content: "";
    position: fixed;
    top: -3000%;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(black, 0.01);
    background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
    background-size: 30%;
    -webkit-animation-name: MOVE-BG;
    -webkit-animation-duration: 500s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
  
  }
}
body {
  &:before {
    filter: blur(6px);
    opacity: 0.8;
    
  }
  &:after {
    filter: blur(1px);
    top: -1500%;
    background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
    background-size: 90%;
    animation-duration: 200s;
  }
}
.more-snow {
  &:before {
    filter: blur(4px);
    opacity: 0.8;
    top: -2500%;
    background-size: 60%;
    animation-duration: 400s;
   
  
  }
  &:after {
    filter: blur(2px);
    opacity: 0.8;
    top: -2000%;
    background-image: url(https://laviwebfiles.com/stage/codepen/4-2-white-snow-png.png);
    background-size: 70%;
    animation-duration: 300s;
 
  }
}

@-webkit-keyframes MOVE-BG {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70%);
  }
}

.title {
  color: green;
  text-align: center;
  font-family: "Dancing Script", cursive;
  font-size: 4rem;
text-decoration: underline;
}

iframe {
  z-index: 5;
}
`

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
      <GlobalStyle />
      <h1 className="title">22 days of Yule</h1>
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
