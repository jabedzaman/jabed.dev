import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Layout from "./Layout";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Hey! I am Jabed", "developer.js", "<LovetoCode/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <Layout>
      <div className="flex mt-20 flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <LazyLoadImage
          src="https://ik.imagekit.io/jabedzaman/Portfolio/xense_LVL6CXNEs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666183592676"
          className="relative rounded-full h-32 flex-grow-0 lg:h-52 mx-auto object-cover"
          alt="Jabed Zaman"
          effect="blur"
        />
        <div className="z-20">
          <h2 className="text-gray-500 text-sm pb-2 tracking-[15px]">
            Developer
          </h2>
          <h1 className="text-2xl lg:text-4xl font-semibold px-10">
            <span className="mr-3 text-gray-600 dark:text-gray-300">
              {text}
            </span>
            <Cursor cursorColor="#0492c2" />
          </h1>
        </div>
      </div>
    </Layout>
  );
}
