import React, { useEffect, useRef } from "react";
import PolkaStrap from "../../images/melltoo-img1.png";
import Browse from "../../images/melltoo-img2.png";
import { gsap } from "gsap";

const Page7 = () => {
  const phonesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      phonesRef.current,
      {
        x: "10vw",
        y: "100vh",
      },
      {
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div id="page7" ref={phonesRef}>
      <img src={Browse} alt="" />
      <img src={PolkaStrap} alt="" />
    </div>
  );
};

export default Page7;
