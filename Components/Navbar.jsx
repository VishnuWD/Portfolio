import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around h-[15vh] w-full items-center absolute top-0 left-0 right-0 z-[90] text-white">
      <h1 className="font-semibold text-[8vmin] ">{"< Vishnu />"}</h1>
      <ul className="lg:flex gap-[15vmin] cursor-none">
        <a href="/#about">
          <li className="navlist text-[2.5vmin] relative  cursor-none  hidden lg:block">
            About Me
          </li>
        </a>
        <a href="/#projects">
          <li className="navlist text-[2.5vmin] relative cursor-none  hidden lg:block">
            Projects
          </li>
        </a>
        <a href="/#contact">
          <li className="navlist text-[2.5vmin] relative cursor-none  hidden lg:block">
            Contact
          </li>
        </a>
        <div className=""><img className="w-[8vmin] lg:hidden" src="images\menu.png" alt="menu" /></div>
      </ul>
    </nav>
  );
};

export default Navbar;
