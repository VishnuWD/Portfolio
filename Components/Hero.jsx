"use client";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const side = document.getElementById("left");

    const handleOnMove = (e) => {
      const newPosition = (e.clientX / window.innerWidth) * 100;
      side.style.width = `${newPosition}%`;
    };

    document.onmousemove = (e) => {
      handleOnMove(e);
    };
    document.ontouchmove = (e) => {
      handleOnMove(e.touches[0]);
    };
  }, []);

  return (
    <div>
      <div
        id="left"
        className="z-[2] bg-teal-500 flex items-center h-[100vh] text-left w-full absolute overflow-hidden "
      >
        <div>
          <p className="text-gray-700 text-[6vmin] md:text-[3vmin] mx-[12.5vw] min-w-[75vw] font-[500] cursor-default">
            Hi 👋, my name is
          </p>
          <h1 className="heroName">Vishnu Yadav</h1>
          <p className="text-gray-200 text-[5vmin] mx-[12.5vw] min-w-[75vw] mt-[2vh] invisible">
            Aspiring
          </p>
          <p className="text-gray-200 text-[8vmin] md:text-[6vmin] mx-[12.5vw] min-w-[75vw] font-[500] pleft">
            <span className="heroSpan text-gray-700">Front-End</span> Web
            Developer
          </p>
          <p className="text-gray-100 text-[4vmin] md:text-[2.5vmin] mx-[12.5vw] w-[70vmin] md:w-[45vw] mt-[2vh] font-[400] pright">
            I'm a devoted web developer with a passion for creating exceptional
            digital experiences. My journey began in high school, and I continue
            to be inspired by the world of web development!
          </p>
        </div>
      </div>

      <div className="right z-[1] bg-purple-600 flex items-center h-[100vh] w-full overflow-hidden ">
        <div>
          <p className="text-orange-400 text-[6vmin] md:text-[3vmin] mx-[12.5vw] min-w-[75vw] font-[500] cursor-default">
            Hi 👋, my name is
          </p>
          <h1 className="heroName">Vishnu Yadav</h1>
          <p className="text-gray-100 text-[5vmin] mx-[12.5vw] min-w-[75vw] mt-[2vh] cursor-default">
            Aspiring
          </p>
          <p className="text-gray-100 text-[8vmin] md:text-[6vmin] mx-[12.5vw] min-w-[75vw]  font-[500] pright">
            <span className="heroSpan text-orange-400 text-left">
              Full-Stack
            </span>{" "}
            Web Developer{" "}
          </p>
          <p className="text-gray-100 text-[4vmin] md:text-[2.5vmin] mx-[12.5vw] w-[70vmin] md:w-[45vw] mt-[2vh] font-[400] pright">
            I'm a devoted web developer with a passion for creating exceptional
            digital experiences. My journey began in high school, and I continue
            to be inspired by the world of web development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
