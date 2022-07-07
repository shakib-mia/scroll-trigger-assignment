import React, { useEffect, useRef } from "react";
import vemeApp from "../../images/veme-app-ui-design.png";
import blockchain from "../../images/veme-blockchain-app-developed.png";
import { gsap } from "gsap";

const Page2 = () => {
  const veme_app = useRef(null);
  const veme_blockchain = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      veme_app.current,
      {
        x: "50vw",
        y: "-100vh",
      },
      {
        y: "-14vh",
        duration: 1,
      }
    );
    gsap.fromTo(
      veme_blockchain.current,
      {
        x: "0",
        y: "100vh",
      },
      {
        y: "0",
        duration: 1,
      }
    );
  }, []);

  return (
    <div>
      <img src={vemeApp} alt="" ref={veme_app} width="350" />
      <img src={blockchain} alt="" width="350" ref={veme_blockchain} />
    </div>
  );
};

export default Page2;
