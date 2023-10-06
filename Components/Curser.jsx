import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const first = document.getElementById("first");
      const second = document.getElementById("second");

      if (first && second) {
        first.style.left = event.x - 7.5 + "px";
        first.style.top = event.y - 7.5 + "px";

        second.style.left = event.x - 100 + "px";
        second.style.top = event.y - 100 + "px";
      }
    };

    const loopFunction = () => {
      const topLeft = Math.floor(Math.random() * 40 + 20) + "vmin";
      const topRight = Math.floor(Math.random() * 40 + 20) + "vmin";
      const bottomRight = Math.floor(Math.random() * 40 + 20) + "vmin";
      const bottomLeft = Math.floor(Math.random() * 40 + 20) + "vmin";

      second.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}/ ${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
      second.style.height = "30vmin";
      second.style.width = "30vmin";
      second.style.transition = "all 0.5s linear";
    };

    const intervalId = setInterval(loopFunction, 5000);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(intervalId); 
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="total">
      <div id="first"></div>
      <div id="second"></div>
    </div>
  );
};

export default Cursor;

