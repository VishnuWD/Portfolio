"use client"
import { projects } from '@/Lib/Static';
import Link from 'next/link';
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

    <div id='projects' className=' w-full relative overflow-hidden flex flex-col items-center '>
      <h2 className='text-[10vmin] font-[800] '>Projects</h2>
     
      <div className='p-[10vmin]'>

      <div className='cardGroup'>
        {projects.map((data, i)=>{
          return  <div key={i} className="card">
          <img src={data.src} alt="" />
          <div className="card__content">
            <p className="card__title">{data.title}</p>
            <ul className="card__description">
              <li>{data.desc1}</li>
              <li>{data.desc2}</li>
            </ul>
            <Link href={data.url} target={data.target}> <button className="card__button" >{data.btn1}</button> </Link>
            <Link href={data.gitUrl} target={data.target2}> <button className="card__button secondary" >{data.btn2}</button></Link>
          </div>
        </div>
          
        })}
      

      </div>
      </div>
    </div>
    
  );
}

Projects.componentType = "useClient";

export default Projects;
