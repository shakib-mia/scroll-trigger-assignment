import React from "react";
import "./Small.local.css";
import Page1 from "../../images/SmallPageAssets/smallPage1.png";
import Page2 from "../../images/SmallPageAssets/smallPage2.png";
import Page3 from "../../images/SmallPageAssets/smallPage3.png";
import Page4 from "../../images/SmallPageAssets/smallPage4.png";
import Page5 from "../../images/SmallPageAssets/smallPage5.png";
import Page6 from "../../images/SmallPageAssets/smallPage6.png";
import Page7 from "../../images/SmallPageAssets/smallPage7.png";
import Heading1 from "./../Headings/Heading1";
import Heading2 from "./../Headings/Heading2";
import Heading3 from "./../Headings/Heading3";
import Heading4 from "./../Headings/Heading4";
import Heading5 from "./../Headings/Heading5";
import Heading6 from "./../Headings/Heading6";
import Heading7 from "./../Headings/Heading7";
import ReactOwlCarousel from "react-owl-carousel";

const Small = () => {
  return (
    <div>
      <ReactOwlCarousel items={1} dots={true}>
        <div className="item" style={{ backgroundColor: "#6311A8" }}>
          <img src={Page1} alt="" />
          <Heading1></Heading1>
        </div>

        <div className="item" style={{ backgroundColor: "#4D27CD" }}>
          <img src={Page2} alt="" />
          <Heading2></Heading2>
        </div>
        <div className="item" style={{ backgroundColor: "#0E123A" }}>
          <img src={Page3} alt="" />
          <Heading3></Heading3>
        </div>
        <div className="item" style={{ backgroundColor: "#16263B" }}>
          <img src={Page4} alt="" />
          <Heading4></Heading4>
        </div>
        <div className="item" style={{ backgroundColor: "#124CA1" }}>
          <img src={Page5} alt="" />
          <Heading5></Heading5>
        </div>
        <div className="item" style={{ backgroundColor: "#012C91" }}>
          <img src={Page6} alt="" />
          <Heading6></Heading6>
        </div>
        <div className="item" style={{ backgroundColor: "#00834C" }}>
          <img src={Page7} alt="" />
          <Heading7></Heading7>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default Small;
