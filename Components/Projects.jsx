"use client"
import { projects } from '@/Lib/Static';
import Link from 'next/link';
import React, { useEffect } from 'react';

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

    <div id='projects' className=' w-full relative overflow-hidden flex flex-col items-center px-[10%]'>
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
