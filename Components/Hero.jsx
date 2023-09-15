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
        className="z-[10] bg-teal-500 grid place-items-center h-[100vh] w-full absolute overflow-hidden"
      >
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw] text-center">
            I am Vishnu Yadav
          </h1>
          <p className="text-white text-[8vmin] mx-[5vw] min-w-[90vw] mt-[5vh] pleft text-center">
            A{" "}
            <span className="font-semibold font-serif text-[10vmin] text-gray-700 inline-block w-[54vmin] ">
              Front-End
            </span>{" "}
            Web Developer
          </p>
        </div>
      </div>

      <div className=" bg-purple-600 grid place-items-center items-center h-[100vh] w-[100%] absolute overflow-hidden">
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw] text-center">
            I am Vishnu Yadav
          </h1>
          <p className="text-white text-[8vmin] mx-[5vw] min-w-[90vw] mt-[5vh] text-center">
            Aspiring{" "}
            <span className="font-semibold font-serif text-[10vmin] text-orange-400 inline-block w-[54vmin]">
              Full-Stack
            </span>{" "}
            Web Developer{" "}
          </p>
        </div>
      </div>
      <div className="h-[100vh] w-[100%]"></div>
    </div>
  );
};

export default Hero;
