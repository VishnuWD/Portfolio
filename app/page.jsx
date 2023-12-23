"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Curser from "@/Components/Curser";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Socials from "@/Components/Socials";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { collapseToast } from "react-toastify";

const Page = () => {

  return (
    <div className="selection:text-orange-400 ">
      <Suspense fallback={<Loading />}>
        <Curser />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Socials />
      </Suspense>
    </div>
  );
};

export default Page;
