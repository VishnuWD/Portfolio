"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Curser from "@/Components/Curser";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";

const page = () => {
  return (
    <>
      <Curser />
      <Hero />
      <About />
      <Projects />
      <Contact />
    <p className='fixed bottom-0 h-[30px] bg-red-700 z-[100] w-full text-center'>The website is currently in development.</p>
    </>
  );
};

export default page;
