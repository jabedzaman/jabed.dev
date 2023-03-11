import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Hey! I am Jabed", "developer.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="max-w-3xl mx-auto p-5">
      <div className="flex md:flex-row flex-col items-center">
        <div>
          <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/99767817?v=4"
            className="relative rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 shadow-2xl border-4 border-gray-200 z-10"
            alt="Jabed Zaman"
            effect="blur"
          />
        </div>
        <div>
          <div className="z-20">
            <h1 className="text-lg md:text-left text-center lg:mt-0 mt-4 md:text-2xl lg:text-4xl font-semibold px-10">
              <span className="mr-1">{text}</span>
              <Cursor cursorColor="#0492c2" />
            </h1>
            <p className="text-xs md:text-sm max-w-sm lg:text-base text-gray-500 px-10">
              I am a self-taught web developer. I love to build things for the
              web and learn new things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
