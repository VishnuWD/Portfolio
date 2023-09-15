"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Curser from "@/Components/Curser";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";


const page = () => {
 
 

  return (
   <>
   <Curser/>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
