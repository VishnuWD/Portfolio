"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Curser from "@/components/Curser";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

const page = () => {
  return (
    <>
      <Curser />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default page;
