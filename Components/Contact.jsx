import React from "react";
import { RiTwitterXFill  } from "react-icons/ri"
import { FiLinkedin, FiGithub, FiInstagram  } from "react-icons/fi"

import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center py-[8vmin] px-[12.5%] h-fit bg-gray-800">
      <h2 className="h2Titles pb-[8vmin] ">Contact Me</h2>
      <h2 className="text-[5vmin] text-gray-300 font-bold underline text-center pb-[3vmin] cursor-default">Get In Touch</h2>
      <p className="lg:w-1/2 text-center pb-[5vmin] text-gray-300 cursor-default">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim rem consequuntur corrupti recusandae eligendi.</p>
      <button className="contactButton "> Say Hello</button>
      
      <div className="socialButtons">
      <ul className=" lg:hidden flex items-center gap-[8vmin] lg:gap-[4vmin] mb-[12vmin]">
          <li><RiTwitterXFill className="iconStyles"/></li>
          <li><FiLinkedin className="iconStyles"/></li>
          <li><FiGithub className="iconStyles"/></li>
          <li ><FiInstagram className="iconStyles"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
