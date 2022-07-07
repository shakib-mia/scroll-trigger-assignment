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
        x: "-30vw",
        y: "-10vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      breadAnimate.current,
      {
        y: "-100vh",
      },
      {
        x: "20vw",
        y: "-20vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      greenAnimate.current,
      {
        x: "-15vw",
        y: "100vh",
      },
      {
        y: "55vh",
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
        x: "15vw",
        y: "80vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      redAnimate.current,
      {
        x: "8vw",
        y: "-10vh",
      },
      {
        y: "10vh",
        x: "8vw",
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
