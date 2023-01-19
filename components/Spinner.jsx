import React, { useState } from "react";

function Spinner() {
  const [dots, setDots] = useState(".");
  const updateDots = () => {
    if (dots.length < 3) {
      setDots(dots + ".");
    } else {
      setDots(".");
    }
  };
  setInterval(updateDots, 1000);
  return <p className="flex justify-center font-semibold lg:text-2xl md:text-xl text-lg">Loading {dots}</p>;
}

export default Spinner;
