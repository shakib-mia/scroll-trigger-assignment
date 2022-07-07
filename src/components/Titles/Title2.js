import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Title2 = () => {
  const blockchainHead = useRef(null);
  const blockchainBody = useRef(null);
  const blockchainFoot = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      blockchainHead.current,
      {
        scrollTrigger: "#blockchain",
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );

    gsap.fromTo(
      blockchainFoot.current,
      {
        rotateX: 180,
      },
      {
        rotateX: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      blockchainBody.current,
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
    <div id="blockchain">
      <h6 ref={blockchainHead}>The Next Big</h6>
      <h1 ref={blockchainBody}>Blockchain</h1>
      <h6 ref={blockchainFoot}>Revolution</h6>
    </div>
  );
};

export default Title2;
