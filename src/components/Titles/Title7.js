import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Title7 = () => {
  const EastAsiaHead = useRef(null);
  const EastAsiaBody = useRef(null);
  const EastAsiaFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      EastAsiaHead.current,
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
      EastAsiaBody.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      EastAsiaFoot.current,
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
    <div id="biggest-classifieds">
      <h6 ref={EastAsiaHead}>Biggest Classifieds</h6>
      <h1 ref={EastAsiaBody}>East Asia</h1>
      <h6 ref={EastAsiaFoot}>Countries</h6>
    </div>
  );
};

export default Title7;
