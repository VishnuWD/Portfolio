"use client";
import { projects } from "@/Lib/Static";
import Link from "next/link";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bc");
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
      className="py-[8vmin] w-full relative overflow-hidden flex flex-col items-center px-[10%]"
    >
      <h2 className="h2Titles pb-[8vmin]">Projects</h2>
      {projects.map((data, i) => {
        return (
          <div key={i} className="relative grid items-center w-[100%] mb-[20vmin]">
            <img
              className="w-[60%] align-middle aspect-video relative"
              src={data.src}
              alt=""
            />
            <div class="text-right absolute">
              <h2 className="text-[5vmin] font-bold text-orange-400">
                {data.title}
              </h2>
              <p className="ml-[50%] bg-gray-900 p-[3%] my-[1.5vmin]">
                {data.desc1}{data.desc2}
              </p>
              <ul className="flex flex-row-reverse gap-[5%] font-semibold">
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
    </div>
  );
};

Projects.componentType = "useClient";

export default Projects;
