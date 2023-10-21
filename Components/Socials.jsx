import React from "react";
import { RiTwitterXFill  } from "react-icons/ri"
import { FiLinkedin, FiGithub  } from "react-icons/fi"
const Socials = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col items-center gap-[2vmin] fixed bottom-0 left-[3%] z-10">
        <ul className="flex flex-col items-center gap-[2vmin]">
          <li><RiTwitterXFill className="iconStyles"/></li>
          <li><FiLinkedin className="iconStyles"/></li>
          <li><FiGithub className="iconStyles"/></li>
          <li >&</li>
        </ul>
        <div className="bg-white h-[25vmin] w-[0.3vmin] "></div>
      </div>

      <div className="fixed bottom-48 right-[-13%] z-10  flex items-center gap-[2vmin] rotate-90 ">
        <form action="mailto:vishnuyadavhome@gmail.com">
            <button type="submit" className="">vishnuyadavhome@gmail.com</button>
        </form>
        <div className="bg-white h-[0.3vmin] w-[25vmin] "></div>

      </div>
    </div>
  );
};

export default Socials;
