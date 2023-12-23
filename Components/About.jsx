"use client";
import React from "react";
import Image from "next/image";
import { icons } from "@/Lib/Static";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.3, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const About = ({theme}) => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center py-[8vmin] px-[5%] lg:px-[12.5%] h-fit "
    >
      <h2 className="h2Titles">About Me</h2>
      <div className="gradient "></div>

      <div className="Wrapper flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col justify-center">
          <h2 className="text-gray-300 text-[5vmin]  text-center lg:text-left font-bold pb-[1.5vmin] underline z-[10]">
            My Journey
          </h2>
          <div className='text-gray-300'>
          <p className="para">
            Greetings! I'm Vishnu Yadav, and I'm passionate about web
            development. My journey into the world of coding began in high
            school when I discovered the magic of HTML and CSS. During my
            undergraduate studies in Bachelor of Commerce with a focus on
            computer applications, I deepened my understanding of web
            development, exploring JavaScript and various frameworks.
          </p>
          <p className="para ">
            My focus is on frontend web development, where I strive to create
            user-friendly and visually appealing web solutions. As my career
            unfolds, I have my sights set on becoming a full-stack developer.
          </p>
          <p className="para">
            Eager to take on diverse web projects, whether within a company or
            through freelancing. Let's shape the digital world together!
          </p>
          </div>
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
                <Tilt options={defaultOptions}>
                  <Image
                    src={data.src}
                    alt={data.alt}
                    className={data.class}
                    width={200}
                    height={200}
                  />
                </Tilt>
                <p className=" text-gray-300 text-[4vmin] lg:text-[2.5vmin] font-normal">
                  {data.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
