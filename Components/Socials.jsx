import React from "react";
import { RiTwitterXFill  } from "react-icons/ri"
import { FiLinkedin, FiGithub, FiInstagram  } from "react-icons/fi"
const Socials = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col items-center gap-[4vmin] fixed bottom-0 left-[3%] z-[11]">
        <ul className="flex flex-col items-center gap-[4vmin]">
        <li><a href="https://twitter.com/vishnu_yadav_x" target="_blank"><RiTwitterXFill className="iconStyles"/></a></li>
          <li><a href="https://www.linkedin.com/in/vishnu-yadav-fwd/" target="_blank"><FiLinkedin className="iconStyles"/></a></li>
          <li><a href="https://github.com/VishnuWD" target="_blank"><FiGithub className="iconStyles"/></a></li>
          <li ><a href="https://www.instagram.com/thevishnuig/" target="_blank"><FiInstagram className="iconStyles"/></a></li>
        </ul>
        <div className="bg-white h-[25vmin] w-[0.3vmin] "></div>
      </div>

      <div className="fixed bottom-[-2%] right-[3%] flex items-center gap-[4vmin] origin-right rotate-90 z-[11] ">
        <form action="mailto:vishnuyadavhome@gmail.com">
            <button type="submit" className="mailsocial hover:scale-[105%] font-medium text-[2vmin] transition-all hover:text-orange-400 z-[11]">vishnuyadavhome@gmail.com</button>
        </form>
        <div className="bg-white h-[0.3vmin] w-[25vmin]"></div>

      </div>
    </div>
  );
};

export default Socials;
