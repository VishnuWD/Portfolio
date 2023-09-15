import React from "react";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-[60vh] w-full flex justify-center items-end z-[90]">
      <div className="h-[80%] w-full flex justify-evenly">
        <div className="flex flex-col justify-center gap-[3vmin]">
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
        <div>
            <ContactForm name="Name" id="name"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
