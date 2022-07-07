import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Enterpreneur from "../../images/mobile-app-of-the-year-by-entrepreneur.png";

const Heading7 = () => {
  const headerText = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerText.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="heading">
      <img id="enterpreneur" src={Enterpreneur} alt="" />
      <h1 ref={headerText}>ABC 23478</h1>
      <p>
        We are the best <br /> web development company
        <br /> in the world
      </p>

      <footer>
        <p>View Case Study &rarr;</p>
        <p>S K I P</p>
      </footer>
    </div>
  );
};

export default Heading7;
