import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Page1 = () => {
  const one = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      one.current,
      {
        x: "-100vw",
        y: "-100vh",
      },
      {
        x: "10vw",
        y: "50vh",
        duration: 4,
      }
    );
  }, []);
  return (
    <div>
      <div ref={one} id="one">
        <div style={{ position: "absolute" }}>one</div>
      </div>
    </div>
  );
};

export default Page1;
