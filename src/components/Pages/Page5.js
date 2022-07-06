import React, { useEffect, useRef } from "react";
import One from "../../images/karavan-social-networking-app-screen.png";
import Two from "../../images/social-networking-app-case-study.png";
import Four from "../../images/karavan-social-networking-app-screen-2.png";
import Three from "../../images/developers-for-social-media-app.png";
import Five from "../../images/karavan_2.png";
import { gsap } from "gsap";

const Page5 = () => {
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);
  const fifth = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      first.current,
      {
        x: "-14vw",
        y: "-100vh",
      },
      {
        y: "-16vh",
      }
    );
    gsap.fromTo(
      second.current,
      {
        x: 0,
        y: "-100vh",
      },
      {
        y: "-5vh",
      }
    );
    gsap.fromTo(
      third.current,
      {
        x: "500vw",
        y: "27vh",
      },
      {
        x: "14vw",
      }
    );
    gsap.fromTo(
      fourth.current,
      {
        x: "0",
        y: "100vh",
      },
      {
        y: "70vh",
      }
    );
    gsap.fromTo(
      fifth.current,
      {
        x: "-14vw",
        y: "100vh",
      },
      {
        y: "55vh",
      }
    );
  }, []);

  return (
    <div id="page5">
      <img ref={first} src={One} alt="" />
      <img ref={second} src={Two} alt="" />
      <img ref={third} src={Three} alt="" />
      <img ref={fourth} src={Four} alt="" />
      <img ref={fifth} src={Five} alt="" />
    </div>
  );
};

export default Page5;
