"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Curser from "@/Components/Curser";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Socials from "@/Components/Socials";
import { Suspense } from "react";
import Loading from "./loading";

const page = () => {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Curser />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Socials/>
      </Suspense>
    </>
  );
};

export default page;
