import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Title6 = () => {
  const erpHead = useRef(null);
  const erpBody = useRef(null);
  const erpFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      erpHead.current,
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
      erpBody.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      erpFoot.current,
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
    <div id="erp">
      <h6 ref={erpHead}>Developing ERP Solution for</h6>
      <h1 ref={erpBody}>Text Headline</h1>
      <h6 ref={erpFoot}>in furniture industry</h6>
    </div>
  );
};

export default Title6;
