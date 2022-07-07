import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Title4 = () => {
  const uxHead = useRef(null);
  const uxBody = useRef(null);
  const uxFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      uxHead.current,
      {
        scrollTrigger: "#nasa",
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );

    gsap.fromTo(
      uxBody.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      uxFoot.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
  }, []);

  return (
    <div id="ux-strategy">
      <h6 ref={uxHead}>Redefining</h6>
      <h1 ref={uxBody}>UX Strategy</h1>
      <h6 ref={uxFoot}>and UI Design</h6>
    </div>
  );
};

export default Title4;
