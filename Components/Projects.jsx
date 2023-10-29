"use client";
import { projects } from "@/Lib/Static";
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
      className=" w-full relative overflow-hidden flex flex-col items-center px-[12.5%]"
    >
      <h2 className="h2Titles pb-[8vmin]">Projects</h2>
      {projects.map((data, i) => {
        return (
          <div key={i} className=" hidden lg:visible relative lg:grid items-center w-[100%] mb-[20vmin]">
            <img
              className={`w-[60%] align-middle aspect-video relative ${data.className2}`}
              src={data.src}
              alt=""
            />
            <div className={`text-right  lg:absolute w-full  ${data.className}`}>
              <h2 className="text-[5vmin] font-bold text-orange-400">
                {data.title}
              </h2>
              <p className={`ml-[50%] bg-gray-900 p-[3%] my-[1.5vmin]  ${data.className}`}>
                {data.desc1}{data.desc2}
              </p>
              <ul className={`flex flex-row-reverse gap-[5%] font-semibold ${data.className}`}>
                <li>html</li>
                <li>css</li>
                <li>js</li>
                <li>react</li>
              </ul>
              <div>
                <button className="rounded-full bg-transparent font-bold border-none">
                  $
                </button>
                <button className="rounded-full bg-transparent font-bold border-none">
                  #
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="main">
      
  <div className="card c1 bg-contain" ></div>
  <div className="card c2" ></div>
  <div className="card c3" ></div>
  <div className="card c4" ></div>
  <button className="btn z-10 card">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span className="moreProjectsText">More Projects</span>
</button>

</div>
<div className="bg-orange-500 h-[0.5vmin] w-full rounded-full z-20"></div>
    </div>
  );
};

Projects.componentType = "useClient";

export default Projects;
