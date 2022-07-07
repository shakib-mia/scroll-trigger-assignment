import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import pizza from "../../images/pizza_box.png";
import bread from "../../images/dominos-bread.png";
import bread2 from "../../images/dominos-bread1.png";
import green from "../../images/domi-img1.png";
import red from "../../images/ux-strategy-for-mobile-app-devlopment.png";

const Page4 = () => {
  const pizzaAnimate = useRef(null);
  const breadAnimate = useRef(null);
  const breadAnimate2 = useRef(null);
  const greenAnimate = useRef(null);
  const redAnimate = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pizzaAnimate.current,
      {
        x: "-100vw",
        y: "-100vh",
      },
      {
        x: "0vw",
        y: "0vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      breadAnimate.current,
      {
        x: "70vw",
        y: "-100vh",
      },
      {
        x: "70vw",
        y: "-50vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      greenAnimate.current,
      {
        x: "-15vw",
        y: "0",
      },
      {
        y: "0",
        duration: 1,
      }
    );
    gsap.fromTo(
      breadAnimate2.current,
      {
        x: "50vw",
        y: "100vh",
      },
      {
        x: "60vw",
        y: "-70vw",
        duration: 1,
      }
    );
    gsap.fromTo(
      redAnimate.current,
      {
        x: "0vw",
        y: "0vh",
      },
      {
        y: "0vh",
        x: "0vw",
        duration: 1,
      }
    );
  }, []);
  return (
    <div>
      <img ref={pizzaAnimate} src={pizza} alt="" />
      <img ref={breadAnimate} src={bread} alt="" />
      <img ref={greenAnimate} src={green} alt="" width="250px" />
      <img src={bread2} alt="" width="250px" ref={breadAnimate2} />
      <img src={red} alt="" width="250px" ref={redAnimate} />
    </div>
  );
};

export default Page4;
