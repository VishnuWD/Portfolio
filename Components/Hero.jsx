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
    <>
      <div
        id="left"
        className="z-[1] bg-teal-500 grid place-items-center h-[100vh] w-[100%] absolute overflow-hidden"
      >
        <div>
          <h1 className="text-white  text-8xl font-bold text-[5vw] mx-[15vw] min-w-[70vw]">
            I am Vishnu Yadav 
          </h1>           
          <p className="text-white text-[3vw] mx-[15vw] min-w-[70vw] mt-[5vh] pleft">A <span className="font-semibold font-serif text-[3.5rem] text-gray-700 before:contents-asdklasldk">Front-End</span> Web Developer</p>
        </div>
      </div>

      <div className=" bg-purple-600 grid place-items-center items-center h-[100vh] w-[100%] absolute overflow-hidden">
        <div>
          <h1 className="text-white  text-8xl font-bold text-[5vw] mx-[15vw] min-w-[70vw] ">
            I am Vishnu Yadav
          </h1>
          <p className="text-white text-[3vw] mx-[15vw] min-w-[70vw] mt-[5vh] ">Aspiring <span className="font-semibold font-serif text-[3.5rem] text-orange-400">Full-Stack</span> Web Developer </p>
        </div>
      </div>
      <div className="h-[100vh] w-[100%]">
      </div>
    </>
  );
};

export default Hero;
