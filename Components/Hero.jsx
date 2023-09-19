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
        className="z-[2] bg-teal-500 grid place-items-center h-[100vh] w-full absolute overflow-hidden"
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
          <div className=" flex justify-center gap-3 w-[100vw]">
          <button className="flex gap-[1vmin] font-semibold hover:text-teal-500 hover:bg-gray-700 rounded border-[2px] border-gray-700 text-gray-700 py-[1vmin] px-[3vmin]">linkedin <img className="h-[1.5em]" src="/images/linkedin.png" alt="" /></button>
          <button className="flex gap-[1vmin] font-semibold hover:text-teal-500 hover:bg-gray-700 rounded border-[2px] border-gray-700 text-gray-700 py-[1vmin] px-[3vmin]">Github <img className="h-[1.5em]" src="/images/github.png" alt="" /></button>
          </div>
        </div>
      </div>

      <div className="z-[1] bg-purple-600 grid place-items-center items-center h-[100vh] w-[100%] absolute overflow-hidden">
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
          <div className="flex justify-center gap-3 w-full">
          <button className="flex gap-[1vmin] font-semibold hover:text-voilet-600 hover:bg-orange-400 rounded border-[2px] border-orange-400 text-orange-400 py-[1vmin] px-[3vmin]">linkedin <img className="h-[1.5em]" src="/images/linkedin.png" alt="" /></button>
          <button className="flex gap-[1vmin] font-semibold hover:text-voilet-600 hover:bg-orange-400 rounded border-[2px] border-orange-400 text-orange-400 py-[1vmin] px-[3vmin]">Github <img className="h-[1.5em]" src="/images/github.png" alt="" /></button>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[100%]"></div>
    </div>
  );
};

export default Hero;
