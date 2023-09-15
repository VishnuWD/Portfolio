"use client"
import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    const observerBc = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bc");
        } else {
          // entry.target.classList.remove("bc");
        }
      });
    });

    const observerSc = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sc");
        } else {
          // entry.target.classList.remove("sc");
        }
      });
    });

    const bigCards = document.querySelectorAll(".bigcards");
    const smallCards = document.querySelectorAll(".smallcards");

    bigCards.forEach((el) => observerBc.observe(el));
    smallCards.forEach((el) => observerSc.observe(el));

    // Cleanup function to disconnect the observers when the component unmounts
    return () => {
      bigCards.forEach((el) => observerBc.unobserve(el));
      smallCards.forEach((el) => observerSc.unobserve(el));
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div id='projects' className='h-[100vh] w-full relative overflow-hidden grid place-items-center'>
      <h2 className='text-[10vmin] font-[800]'>Projects</h2>
     
      <div className='p-[12vmin]'>
      <div className='cardGroup '>
        <div className="smallcards card"></div>
        <div className="bigcards card"></div>
        <div className="smallcards card"></div>
        <div className="bigcards card"></div>
        <div className="smallcards card"></div>
        <div className="bigcards card"></div>
        <div className="smallcards card"></div>
        <div className="bigcards card"></div>
      </div>
      </div>
    </div>
  );
}

Projects.componentType = "useClient"; // Mark the component as client-rendered

export default Projects;
