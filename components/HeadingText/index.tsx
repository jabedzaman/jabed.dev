"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { info } from "@/consts";

export const Heading = () => {
  const [text] = useTypewriter({
    words: info.headingTexts,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <p className="text-2xl font-semibold mt-5 mb-3">
      {text}
      <Cursor />
    </p>
  );
};

export default Heading;
