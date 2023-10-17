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
        className="z-[2] bg-teal-500 flex items-center h-[100vh] text-left w-full absolute overflow-hidden"
      >
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw] ">
            I am Vishnu Yadav
          </h1>
          <p className="text-gray-200 text-[6vmin] mx-[10vw] min-w-[80vw] font-[500] mt-[2vh] pleft">
            A{" "} <br />
            <span className="heroSpan text-gray-700 text-left">Front-End</span>{" "}
            Web Developer
          </p>
          <p className="text-gray-100 text-[2.5vmin] mx-[10vw] w-[45vw] mt-[2vh] font-[500] pright">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque, eveniet voluptatibus officiis ad amet autem porro impedit iste adipisci minima iure earum, dolorem doloribus!</p>
        </div>
      </div>

      <div className="right z-[1] bg-purple-600 flex items-center h-[100vh] w-full absolute overflow-hidden">
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw]">
            I am Vishnu Yadav
          </h1>
          <p className="text-gray-200 text-[6vmin] mx-[10vw] min-w-[80vw] mt-[2vh] font-[500] pright">
            Aspiring{" "} <br />
            <span className="heroSpan text-orange-400 text-left">
              Full-Stack
            </span>{" "}
            Web Developer{" "}
          </p>
          <p className="text-gray-100 text-[2.5vmin] mx-[10vw] w-[45vw] mt-[2vh] font-[500] pright">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque, eveniet voluptatibus officiis ad amet autem porro impedit iste adipisci minima iure earum, dolorem doloribus!</p>
        </div>
      </div>

      <div className="h-[100vh] w-[100%]"></div>
    </div>
  );
};

export default Hero;
