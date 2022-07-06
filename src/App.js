import "./App.css";
import Svg from "./components/SVG/Svg";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "./components/Pages/Page1";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollResult, setScrollResult] = useState(0);
  const [textChange, setTextChange] = useState(0);

  const left = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const six = useRef(null);
  const seven = useRef(null);
  const svgText = useRef(null);
  const animate = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollResult((window.scrollY / 585) * 100);
      const scroll = parseInt((window.scrollY / 4747) * 100);
      setTextChange(scroll);
    });
  }, []);

  return (
    <div className="App">
      <div
        ref={left}
        id="left"
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
          <div id="svg-text" ref={svgText}>
            {textChange >= 0 && textChange < 16 ? (
              <div id="download" ref={animate}>
                <h1>25M+ Downloads</h1>
                <h6>on appstore & google playstore</h6>
              </div>
            ) : textChange >= 16 && textChange < 33 ? (
              <div id="blockchain" ref={animate}>
                <h6>The Next Big</h6>
                <h1>Blockchain</h1>
                <h6>Revolution</h6>
              </div>
            ) : textChange >= 33 && textChange < 50 ? (
              <div id="ux-strategy" ref={animate}>
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            ) : textChange >= 50 && textChange < 65 ? (
              <div id="ux-strategy" ref={animate}>
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            ) : textChange >= 65 && textChange < 83 ? (
              <div id="ux-strategy" ref={animate}>
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            ) : textChange >= 50 && textChange < 99 ? (
              <div id="ux-strategy" ref={animate}>
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            ) : (
              <div id="ux-strategy" ref={animate}>
                <h6>Redefining</h6>
                <h1>UX Strategy</h1>
                <h6>and UI Design</h6>
              </div>
            )}
          </div>
          <Svg scrollResult={scrollResult} textChange={textChange}></Svg>
        </div>
      </div>
      <div id="right">
        <Page1></Page1>
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
