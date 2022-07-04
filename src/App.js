import "./App.css";
import Svg from "./components/SVG/Svg";
import React, { useState } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import Title from "./components/Title/Title";

function App() {
  const [scrollResult, setScrollResult] = useState(0);
  const [textChange, setTextChange] = useState(0);

  const left = React.createRef();
  const one = React.createRef();
  const two = React.createRef();
  const three = React.createRef();
  const four = React.createRef();
  const five = React.createRef();
  const six = React.createRef();
  const seven = React.createRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollResult((window.scrollY / 585) * 100);
      const scroll = parseInt((window.scrollY / 4747) * 100);
      setTextChange(scroll);
      console.log(scroll);
    });
  }, []);

  return (
    <div className="App">
      <div
        id="left"
        ref={left}
        style={{
          backgroundColor:
            textChange >= 0 && textChange < 16
              ? "#6311A8"
              : textChange >= 16 && textChange < 33
              ? "#3B21A0"
              : textChange >= 33 && textChange < 50
              ? "#0E123A"
              : textChange >= 33 && textChange < 50
              ? "#16263B"
              : textChange >= 50 && textChange < 65
              ? "#16263B"
              : textChange >= 65 && textChange < 82
              ? "#124CA1"
              : textChange >= 82 && textChange < 100
              ? "#012C91"
              : "#00834C",
        }}
      >
        <div id="svg-container">
          <div id="svg-text">
            {textChange >= 0 && textChange < 16 ? (
              <div id="download">
                <h1>25M+ Downloads</h1>
                <h6>on appstore & google playstore</h6>
              </div>
            ) : textChange >= 16 && textChange < 33 ? (
              <div id="blockchain">
                <h6>The Next Big</h6>
                <h1>Blockchain</h1>
                <h6>Revolution</h6>
              </div>
            ) : textChange >= 33 && textChange < 50 ? (
              <div id="ux-strategy">
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            ) : textChange >= 50 && textChange < 65 ? (
              <Title
                part1="Redefining"
                part2="UX Strategy"
                part3="and UI Design"
              ></Title>
            ) : textChange >= 65 && textChange < 83 ? (
              <Title
                part1="Redefining"
                part2="UX Strategy"
                part3="and UI Design"
              ></Title>
            ) : textChange >= 50 && textChange < 99 ? (
              <Title
                part1="Redefining"
                part2="UX Strategy"
                part3="and UI Design"
              ></Title>
            ) : (
              <Title
                part1="Redefining"
                part2="UX Strategy"
                part3="and UI Design"
              ></Title>
            )}
          </div>
          <Svg scrollResult={scrollResult} textChange={textChange}></Svg>
        </div>
      </div>
      <div id="right">
        <div ref={one} id="one">
          one
        </div>
        <div ref={two} id="two">
          two
        </div>
        <div ref={three} id="three">
          three
        </div>
        <div ref={four} id="four">
          four
        </div>
        <div ref={five} id="five">
          five
        </div>
        <div ref={six} id="six">
          six
        </div>
        <div ref={seven} id="seven">
          seven
        </div>
      </div>
    </div>
  );
}

export default App;
