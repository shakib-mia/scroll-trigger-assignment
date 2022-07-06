import React, { useEffect, useRef } from "react";
import phone from "../../images/measure-total-body-weight-through-fitness-app.png";
import man from "../../images/nasa-fitness-tracking-mobile-app.png";
import { gsap } from "gsap";

const Page3 = () => {
  const phoneAnimate = useRef(null);
  const manAnimate = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      phoneAnimate.current,
      {
        y: "-100vh",
        x: "10vw",
      },
      {
        x: "10vw",
        y: "-17vh",
        duration: 1,
      }
    );

    gsap.fromTo(
      manAnimate.current,
      {
        x: "-15vw",
        y: "100vh",
      },
      {
        x: "-15vw",
        y: "25vh",
        duration: 1,
      }
    );
  }, []);

  return (
    <div>
      <img src={phone} alt="" width="300" ref={phoneAnimate} />
      <img src={man} alt="" width="350" ref={manAnimate} />
    </div>
  );
};

export default Page3;
