import React from "react";
import { RiTwitterXFill  } from "react-icons/ri"
import { FiLinkedin, FiGithub, FiInstagram  } from "react-icons/fi"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center py-[16vmin] px-[12.5%] h-fit bg-gray-800">
      <h2 className="h2Titles pb-[8vmin] ">Contact Me</h2>
      <h2 className="text-[5vmin] text-gray-300 font-bold underline text-center pb-[3vmin] cursor-default">Get In Touch</h2>
      <p className="lg:w-1/2 text-center pb-[5vmin] text-gray-300 cursor-default">I'm actively seeking freelance work and available for new projects.</p>
      <form action="mailto:vishnuyadavhome@gmail.com"><button className="contactButton "> Say Hello</button></form>
      
      <div className="socialButtons">
      <ul className=" lg:hidden flex items-center gap-[8vmin] lg:gap-[4vmin] mb-[12vmin]">
          <li><a href="https://twitter.com/vishnu_yadav_x" target="_blank"><RiTwitterXFill className="iconStyles"/></a></li>
          <li><a href="https://www.linkedin.com/in/vishnu-yadav-fwd/" target="_blank"><FiLinkedin className="iconStyles"/></a></li>
          <li><a href="https://github.com/VishnuWD" target="_blank"><FiGithub className="iconStyles"/></a></li>
          <li ><a href="https://www.instagram.com/thevishnuig/" target="_blank"><FiInstagram className="iconStyles"/></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
