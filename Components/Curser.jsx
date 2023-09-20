import React, { useEffect } from "react";

const Curser = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const first = document.getElementById("first");
      const second = document.getElementById("second");

      
        first.style.left = event.x - 5 + "px";
        first.style.top = event.y - 5 + "px";
        second.style.left = event.x - 100 + "px";
        second.style.top = event.y - 100 + "px";
      
    };

    const loopFunction = () => {
      const topLeft = Math.floor(Math.random() * 300 + 150) + "px";
      const topRight = Math.floor(Math.random() * 300 + 150) + "px";
      const bottomRight = Math.floor(Math.random() * 300 + 150) + "px";
      const bottomLeft = Math.floor(Math.random() * 300 + 150) + "px";
      //   const height = Math.floor(Math.random() * 100 + 100) + "px";
      //   const width = Math.floor(Math.random() * 100 + 100) + "px";

      // Set the borderRadius property with the correct values
      // second.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}/ ${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
      second.style.height = "200px";
      second.style.width = "200px";
      // second.style.transition = "all 0.5s linear";
        // second.style.transition = "width 1s ease-in-out";

      //   second.style.transition = "height 1s ease-in-out";
    };

    // const intervalId = setInterval(loopFunction, 5000);

    // Attach the event listener when the component mounts
    document.addEventListener("mousemove", handleMouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div id="total">
      <div id="first"></div>
{/*       <div id="second"></div> */}
    </div>
  );
};

export default Curser;
