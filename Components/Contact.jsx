import React from "react";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex flex-col justify-center items-center z-[90] h-fit lg:h-[80vh] overflow-hidden p-[10vmin] lg:p-[4vmin]">
      <h2 className="text-[10vmin] font-[800] pt-[10vmin]">Contact Me</h2>

      <div className="w-full flex justify-evenly p-[5vmin] z-[90] flex-col-reverse h-fit items-center lg:flex-row lg:h-fit lg:items-center">
        <div className="flex flex-col justify-evenly w-full">
          <h2 className="text-[7vmin] font-[600] z-[0]">Connect With Me</h2>
          <ContactLinks
            name="Vishnu Yadav"
            link="https://www.linkedin.com/in/vishnu-yadav-fwd/"
            logo="linkedin"
          />
          <ContactLinks
            name="@vishnu_yadav_x"
            link="https://twitter.com/vishnu_yadav_x"
            logo="twitter"
          />
          <ContactLinks
            name="VishnuWD"
            link="https://github.com/VishnuWD"
            logo="github" 
          />
          <ContactLinks
            name="vishnuyadavhome@gmail.com"
            link="mailto:vishnuyadavhome@gmail.com"
            logo="mail"
          />
        </div>
        <img className="min-h-[50vmin] min-w-[50vmin] lg:w-[40vmin]  z-[0] py-[5vmin]" src="images\envelope greeting.png" alt="Mail Image" />
        <form className="z-[90] w-full flex flex-col justify-evenly gap-[1.5vmin]" >
          <h2 className="text-[7vmin] font-[600] z-[0]">Say Hi</h2>
            <ContactForm name="Name" id="name" type="text"/>
            <ContactForm name="Email" id="email" type="email"/>
            <div className="relative">
            <textarea className="focus:border-orange-400 focus:border-solid focus:outline-none bg-gray-800 border-solid border-[2px] w-[100%] border-orange-400 rounded-xl py-[1vmin] px-[3vmin]" name="Message" id="message" cols="20" rows="3" placeholder=" "/>
            <label className='absolute top-[15%] translate-y-[-50%] left-[7%] transition-all cursor-text px-1 rounded' htmlFor="message">Message</label>
            </div>
            <button className=" flex justify-center items-center gap-5 text-[3vmin] bg-gray-800 font-[600] border-orange-400 border-[2px] w-[100%] rounded-xl px-[3vmin] py-[1vmin]">Send <img className="h-[3vmin]" src="/images/send.png" alt="" /></button>

        </form>
        
      </div>
    </div>
  );
};

export default Contact;
