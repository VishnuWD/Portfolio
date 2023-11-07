"use client"

import React, { useState } from "react";
 

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const hideNav =() => setShowNav(false)

  return (
    <nav className="flex justify-around h-[15vh] w-full items-center absolute top-0 left-0 right-0 z-[90] text-white overflow-hidden">
      <h1 className="font-bold text-[7vmin] lg:text-[4vmin] z-20">
        {"< Vishnu />"}
      </h1>
      
      <label className="bar z-20 lg:hidden" for="check">
    <input type="checkbox" id="check" className="lg:hidden z-20" onClick={toggleNav} checked={showNav}/>
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
        
          <li className="navlist" onClick={hideNav}><a href="/#contact">Contact</a></li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
