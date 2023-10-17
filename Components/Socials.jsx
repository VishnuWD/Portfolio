import React from "react";

const Socials = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col items-center gap-[2vmin] fixed bottom-0 left-[3%] z-10">
        <ul className="flex flex-col items-center gap-[2vmin]">
          <li>@</li>
          <li>$</li>
          <li>%</li>
          <li>&</li>
        </ul>
        <div className="bg-white h-[25vmin] w-[0.5vmin] "></div>
      </div>

      <div className="fixed bottom-48 right-[-13%] z-10  flex items-center gap-[2vmin] rotate-90 ">
        <form action="mailto:vishnuyadavhome@gmail.com">
            <button type="submit" className="">vishnuyadavhome@gmail.com</button>
        </form>
        <div className="bg-white h-[0.5vmin] w-[25vmin] "></div>

      </div>
    </div>
  );
};

export default Socials;
