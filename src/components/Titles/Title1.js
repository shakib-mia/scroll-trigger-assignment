import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Title1 = () => {
  const downloadHead = useRef(null);
  const downloadFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      downloadHead.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      downloadFoot.current,
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
    <div id="download">
      <h1 ref={downloadHead}>25M+ Downloads</h1>
      <h6 ref={downloadFoot}>on appstore & google playstore</h6>
    </div>
  );
};

export default Title1;
