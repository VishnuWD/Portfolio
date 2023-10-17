"use client";
import React from "react";
import Image from "next/image";
import { Lucy } from "@/Lib/Static";


const About = () => {
  return (
    <div
      id="about"
      className=" md:h-[100vh] w-full relative overflow-hidden flex flex-col justify-center px-[10%]"
    >
      <h2 className="text-[10vmin] font-[800] text-center p-[8vmin]">About Me</h2>
      <div className="gradient rotate-90 md:rotate-0"></div>

      <div className="Wrapper m-[10vmin] mt-[0px] flex flex-col lg:flex-row justify-center">
        <div className="lg:text-right text-center w-[100%] flex flex-col justify-center ">
          <h2 className="text-[7vmin]">About Me</h2>
          <p className="para">
            As a Frontend Developer, I am currently expanding my skillset by
            learning backend development, with the goal of becoming a Full Stack
            Developer. In addition to coding, I enjoy staying active and often
            visit the gym.
          </p>
        </div>
        <img
          className="min-h-[50vmin] min-w-[50vmin] pb-[10vmin]"
          src="\images\smile.png"
          alt="Vishnu Picture"
        />
        <div className="lg:text-left text-center w-[100%] flex flex-col justify-center">
          <h2 className="text-[7vmin]">Skills</h2>
          <div className="flex justify-center flex-wrap gap-[4vmin]">
          {Lucy.map((data, i) =>{
          return <div key={i} className="flex justify-center items-center flex-col">
              <Image  src={data.src} alt={data.alt} className={data.class} width={50} height={50} />
              <p>{data.name}</p>
              </div>}
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
