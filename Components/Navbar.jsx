"use client"

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const hideNav =() => setShowNav(false)

  return (
    <nav className="flex justify-around h-[15vh] w-full items-center absolute top-0 left-0 right-0 z-[90] text-white overflow-hidden selection:text-orange-400">
      <Link href="/"><img className=" h-[9vmin] lg:h-[6vmin] z-20" src="\images\logo.png"/></Link>
      
      <label className="bar z-20 lg:hidden" htmlFor="check">
    <input type="checkbox" id="check" className="lg:hidden z-20" onClick={toggleNav} checked={showNav} readOnly/>
    <span className="top"></span>
    <span className="middle"></span>
    <span className="bottom"></span>
</label>


      <ul id="navUl"
        className={`lg:flex gap-[15vmin] ${
          showNav ? "block" : "hidden lg:block"
        } cursor-none fixed lg:static lg:bg-transparent lg:w-fit bg-gray-800 top-[0] w-full text-center h-[40vh] lg:h-fit pt-[15vh] lg:pt-[0]`}>

        <a href="/#about">
          <li className="navlist" onClick={hideNav}>About Me</li>
        </a>
        <a href="/#projects">
          <li className="navlist" onClick={hideNav}>Projects</li>
        </a>
        <a href="/#contact">
          <li className="navlist" onClick={hideNav}>Contact</li>
          </a>
        
      </ul>
    </nav>
  );
};

export default Navbar;