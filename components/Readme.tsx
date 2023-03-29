import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import StatsCard from "./StatsCard";
import Wakatime from "./Wakatime";
import Devicons from "./Devicons";
import Image from "next/image";

function Readme({ stars, followers, publicRepos, wakaTime }: readmeProps) {
  const [text] = useTypewriter({
    words: ["Hey! I am Jabed", "developer.tsx"],
    loop: true,
    delaySpeed: 2000,
  });
  const [summaryVisible, setSummaryVisible] = useState(false);
  return (
    <section className="border border-gray-200 dark:border-gray-700 lg:max-w-3xl md:max-w-xl  md:p-5 lg:p-7 p-3 z-10 md:hover:shadow-lg md:dark:hover:shadow-gray-900 duration-150 ease-in-out ">
      <p className="font-mono text-xs">
        jabedzaman / <span className="text-gray-500">README</span>.md
      </p>
      <h1 className="flex items-center text-2xl md:text-3xl lg:text-4xl font-bold">
        <Image
          src="https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/gifs/wave.gif"
          alt="wave"
          height={30}
          width={30}
          className="mr-1"
        />
        <span className="mr-1">{text}</span>
        <Cursor cursorColor="#0492c2" />
      </h1>
      <p className="text-gray-500 md:text-sm text-xs">
        I am a self-taught developer. I love to build android apps and things
        for the web.
      </p>
      <section className="flex md:flex-row border-t-2 dark:border-t-gray-700 border-t-gray-200 mt-4 pt-2 md:space-x-1 space-x-0 flex-col md:space-y-0 space-y-1">
        <StatsCard
          stars={stars}
          followers={followers}
          publicRepos={publicRepos}
        />
        <Wakatime totalHours={wakaTime} />
      </section>
      <h1 className="font-semibold  border-t-2 dark:border-t-gray-700 border-t-gray-200 mt-4 pt-2">
        🧰 Skills and tools
      </h1>
      <Devicons />
      <span className="flex  flex-row items-center  border-t-2 dark:border-t-gray-700 border-t-gray-200 mt-4 pt-2">
        {summaryVisible ? (
          <AiFillCaretDown
            className="text-xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        ) : (
          <AiFillCaretRight
            className="text-xl cursor-pointer"
            onClick={() => setSummaryVisible(!summaryVisible)}
          />
        )}
        <h1 className="font-semibold">wanna know more?</h1>
      </span>
      {summaryVisible && (
        <p className="text-xs md:text-sm duration-150 ease-in-out">
          I am a full stack web/app developer and use technologies like react,
          nodejs, tailwind, firebase, appwrite, react native to build full stack
          web apps and android applications. In addition to it I am a Linux
          enthusiast. Being curious about technology gives me the banger to get
          into coding and development. I enjoy doing this and keep trying to
          polish myself with the bleding tech stack in the market. <br />I use
          arch BTW
        </p>
      )}
    </section>
  );
}

export default Readme;
