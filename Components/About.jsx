"use client";
import React from "react";


const About = () => {

  return (
    <div
      id="about"
      className="h-[100vh] w-full relative overflow-hidden flex flex-col justify-center"
    >
      <h2 className="text-[10vmin] font-[800] text-center ">About Me</h2>
      <div className="gradient"></div>

      <div className="Wrapper m-[10vmin] mt-[0px] flex justify-center">
        <div className="text-right w-[60vmin] flex flex-col justify-center ">
          <h2 className="text-[7vmin]">About Me</h2>
          <p>
          As a Frontend Developer, I am currently expanding my skillset by learning backend development, with the goal of becoming a Full Stack Developer. In addition to coding, I enjoy staying active and often visit the gym.
          </p>
        </div>
        <img
          className="h-[50vmin]"
          src="\images\smile.png"
          alt="Vishnu Picture"
        />
        <div className="text-left w-[60vmin] flex flex-col justify-center">
          <h2 className="text-[7vmin]">Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            pariatur aperiam corrupti magnam, officia, ab nobis perspiciatis
            expedita a iure, sequi vel atque voluptates placeat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
