import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import HeadingImage from "../../images/world-communication-awards-for-best-digital-experience.png";

const Heading1 = () => {
  const image = useRef(null);
  const headerText = useRef(null);
  const para = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      image.current,
      {
        width: 0,
      },
      {
        width: "18rem",
        duration: 1,
      }
    );

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
      <img
        ref={image}
        src={HeadingImage}
        alt=""
        // style={{ backgroundColor: "#6311A8", paddingTop: "20px" }}
      />
      <h1 ref={headerText}>ABC 123</h1>
      <p ref={para}>
        We are the best web development <br /> company in the world
      </p>

      <footer>
        <p>View Case Study &rarr;</p>
        <p>S K I P</p>
      </footer>
    </div>
  );
};

export default Heading1;
