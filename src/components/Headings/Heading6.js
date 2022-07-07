import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Heading6 = () => {
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
      <h1 ref={headerText}>ABC 678</h1>
      <p>
        Best Since 2017 <br /> We offer wide range of <br /> web development and
        app development
      </p>

      <footer>
        <p>View Case Study &rarr;</p>
        <p>S K I P</p>
      </footer>
    </div>
  );
};

export default Heading6;
