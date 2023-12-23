"use client";
import { projects } from "@/Lib/Static";
import MoreProjects from "@/app/MoreProjects/page";
import Link from "next/link";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cardView");
        } else {
          // entry.target.classList.remove("bc");
        }
      });
    });

    const bigCards = document.querySelectorAll(".card");

    bigCards.forEach((el) => observer.observe(el));

    return () => {
      bigCards.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      id="projects"
      className=" w-full relative overflow-hidden flex flex-col items-center px-[5%] pt-[8vmin] lg:px-[12.5%]"
    >
      <h2 className="h2Titles pb-[8vmin]">Projects</h2>
      {projects.map((data, i) => {
        return (
          <div
            key={i}
            className=" hidden lg:visible relative lg:grid items-center w-[100%] mb-[20vmin]"
          >
            <img
              className={`w-[60%] align-middle aspect-video ${data.className2}`}
              src={data.src}
              alt=""
            />
            <div
              className={`text-right  lg:absolute w-full  ${data.className}`}
            >
              <h2 className="text-[5vmin] font-bold text-orange-400">
                {data.title } 
              </h2>
              <p
                className={`ml-[50%] bg-gray-900 p-[3%] my-[1.5vmin]  ${data.className}`}
              >
                {data.desc1}
              </p>
              <div>
                <a href={data.url} target={data.target}>
                  <button className="projectsBtns1">{data.btn1}</button>
                </a>
                <a href={data.gitUrl} target={data.target}>
                  <button className="projectsBtns2">{data.btn2}</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
      {/* For small screens */}
      {projects.map((data, i) => {
        return (
          <div
            key={i}
            className=" visible lg:hidden relative grid items-center w-[100%] mb-[20vmin]"
          >
            <h2 className="text-[7vmin] font-bold text-center text-orange-400 mb-[2vmin]">
              {data.title}
            </h2>

            <img
              className={`align-middle aspect-video p-[4%_4%_0_4%] bg-gray-900`}
              src={data.src}
              alt=""
            />
            <div className={`text-center`}>
              <p className={` bg-gray-900 p-[3%]  `}>{data.desc1}</p>
              <div>
                <a href={data.url} target={data.target}>
                  <button className="projectsBtns1">{data.btn1}</button>
                </a>
                <a href={data.gitUrl} target={data.target}>
                  <button className="projectsBtns2">{data.btn2}</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <div className="main">
        <div className="card cardTransition bg-contain"></div>
        <div className="card cardTransition "></div>
        <div className="card cardTransition "></div>
        <div className="card cardTransition "></div>
        
        <button className="z-10 card moreProjectbtn">
        <Link href="/MoreProjects"><span>✨More Projects</span></Link>
          </button>
      </div>
      <div className="bg-orange-500 h-[0.5vmin] w-full rounded-full z-20"></div>
    </div>
  );
};

Projects.componentType = "useClient";

export default Projects;
