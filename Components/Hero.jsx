"use client";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const side = document.getElementById("left");

    const handleOnMove = (e) => {
      const newPosition = (e.clientX / window.innerWidth) * 100;
      side.style.width = `${newPosition + 1}%`;
    };

    document.onmousemove = (e) => {
      handleOnMove(e);
    };
    document.ontouchmove = (e) => {
      handleOnMove(e.touches[0]);
    };
  }, []);

  return (
    <div >
      <div
        id="left"
        className="z-[2] bg-teal-500 grid place-items-center h-[100vh] w-full absolute overflow-hidden"
      >
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw] text-center">
            I am Vishnu Yadav
          </h1>
          <p className="text-white text-[8vmin] mx-[5vw] min-w-[90vw] mt-[5vh] pleft text-center">
            A <span className="heroSpan text-gray-700 text-left">Front-End</span> Web
            Developer
          </p>
         
        </div>
      </div>

      <div className="right z-[1] bg-purple-600 grid place-items-center items-center h-[100vh] w-full absolute overflow-hidden">
        <div>
          <h1 className="text-white font-bold text-[12vmin] mx-[10vw] max-w-[80vw] text-center">
            I am Vishnu Yadav
          </h1>
          <p className="text-white text-[8vmin] mx-[5vw] min-w-[90vw] mt-[5vh] text-center">
            Aspiring{" "}
            <span className="heroSpan text-orange-400 text-left">Full-Stack</span> Web
            Developer{" "}
          </p>
        
        </div>
      </div>
      {/* <div className="absolute flex justify-center gap-3 ">
            <button className="herobutton hover:text-teal-500 transition-all hover:bg-gray-700 border-gray-700 text-gray-700 p">
              linkedin{" "}
              <img className="h-[1.5em]" src="/images/linkedin.png" alt="" />
            </button>
            <button className="herobutton hover:text-teal-500 hover:bg-gray-700 border-gray-700 text-gray-700">
              Github{" "}
              <img className="h-[1.5em]" src="/images/github.png" alt="" />
            </button>
          </div> */}
      <div className="h-[100vh] w-[100%]"></div>
    </div>
  );
};

export default Hero;
