import React, { useEffect, useRef } from "react";
import dilDhadakne from "../../images/nexgtv-entertainment-mobile-app-development.png";
import CID from "../../images/nexgtv-mobile-app-ui-design.png";
import { gsap } from "gsap";

const Page1 = () => {
  const dil = useRef(null);
  const cid = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cid.current,
      {
        x: "45vw",
        y: "100vh",
      },
      {
        duration: 1,
        y: "-30vh",
      }
    );
    gsap.fromTo(
      dil.current,
      {
        x: "0",
        y: "-100vh",
      },
      {
        y: "30vh",
        duration: 1,
      }
    );
  }, []);

  return (
    <div>
      <img src={dilDhadakne} ref={dil} alt="" />
      <img src={CID} ref={cid} alt="" />
    </div>
  );
};

export default Page1;
