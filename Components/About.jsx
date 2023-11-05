"use client";
import React from "react";
import Image from "next/image";
import { icons } from "@/Lib/Static";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center py-[8vmin] px-[5%] lg:px-[12.5%] h-fit "
    >
      <h2 className="h2Titles">About Me</h2>
      <div className="gradient "></div>

      <div className="Wrapper flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-[5vmin] text-gray-300 text-center lg:text-left font-bold pb-[1.5vmin] underline z-[99]">
            My Journey
          </h2>
          <p className="para ">
            As a Frontend Developer, I am currently expanding my skillset by
            learning backend development, with the goal of becoming a Full Stack
            Developer. In addition to coding, I enjoy staying active and often
            visit the gym.
          </p>
          <p className="para ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            harum ipsum vitae enim alias dolor nisi fugit odio! Eum odit illo
            nobis sunt quasi cumque veritatis asperiores. Illum corporis, optio
            veniam eum, quaerat magni quisquam incidunt sapiente
          </p>
          <p className="para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            officiis temporibus odio nulla laborum quo amet veniam, iste fuga
            et?
          </p>
        </div>
        <img
          className="min-h-[50vmin] min-w-[50vmin] pb-[10vmin]"
          src="\images\smile.png"
          alt="Vishnu Picture"
        />
      </div>
      <div className="lg:text-left text-center w-[100%] py-[5vmin] flex flex-col justify-center">
        <h2 className="text-[5vmin] font-bold underline text-center pb-[3vmin]  text-gray-300">
          My Tech Stack
        </h2>
        <div className="flex justify-center flex-wrap gap-[4vmin]">
          {icons.map((data, i) => {
            return (
              <div
                key={i}
                className="flex justify-center items-center flex-col"
              >
                <Image
                  src={data.src}
                  alt={data.alt}
                  className={data.class}
                  width={200}
                  height={200}
                />
                <p className=" text-gray-300 text-[4vmin] lg:text-[2.5vmin] font-normal">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
