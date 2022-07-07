import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import nasa from "../../images/nasa-mobile-app.png";

const Title3 = () => {
  const nasaHead = useRef(null);
  const nasaBody = useRef(null);
  const nasaFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nasaHead.current,
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
      nasaFoot.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      nasaBody.current,
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
    <div id="nasa">
      <h6 ref={nasaHead}>Powered by advance</h6>
      <img ref={nasaBody} src={nasa} alt="" width="217" />
      <h6 ref={nasaFoot}>algorithms</h6>
    </div>
  );
};

export default Title3;
