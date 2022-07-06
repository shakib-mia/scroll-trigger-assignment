import "./App.css";
import Svg from "./components/SVG/Svg";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page4 from "./components/Pages/Page4";
import Page3 from "./components/Pages/Page3";
import Page2 from "./components/Pages/Page2";
import Page1 from "./components/Pages/Page1";
import Page5 from "./components/Pages/Page5";
import Page6 from "./components/Pages/Page6";
import Page7 from "./components/Pages/Page7";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollResult, setScrollResult] = useState(0);
  const [textChange, setTextChange] = useState(0);

  const downloadHead = useRef(null);
  const downloadFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      downloadHead.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
      }
    );
    gsap.fromTo(
      downloadFoot.current,
      {
        y: "-100vh",
        display: "none",
      },
      {
        y: 0,
        display: "block",
      }
    );
  }, []);

  const left = useRef(null);

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
          <div id="svg-text">
            {textChange >= 0 && textChange < 16 ? (
              <div id="download">
                <h1 ref={downloadHead}>25M+ Downloads</h1>
                <h6 ref={downloadFoot}>on appstore & google playstore</h6>
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
        {textChange >= 0 && textChange < 16 ? (
          <div id="one" className="page">
            <Page1></Page1>
          </div>
        ) : textChange >= 16 && textChange < 33 ? (
          <div id="two" className="page">
            <Page2></Page2>
          </div>
        ) : textChange >= 33 && textChange < 50 ? (
          <div id="three" className="page">
            <Page3></Page3>
          </div>
        ) : textChange >= 50 && textChange < 65 ? (
          <div id="four" className="page">
            <Page4></Page4>
          </div>
        ) : textChange >= 65 && textChange < 83 ? (
          <div id="five" className="page">
            <Page5></Page5>
          </div>
        ) : textChange >= 50 && textChange < 99 ? (
          <div id="six" className="page">
            <Page6></Page6>
          </div>
        ) : (
          <div id="seven" className="page">
            <Page7></Page7>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
