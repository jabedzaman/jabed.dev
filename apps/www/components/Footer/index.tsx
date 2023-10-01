"use client";

import Link from "next/link";
import { useEffect } from "react";
import { animate } from "motion";

function AnimatedBars() {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      },
    );
  }, []);

  return (
    <div className="w-auto flex items-end overflow-hidden">
      <span id="bar1" className="w-1 mr-[3px] h-2 bg-gray-500 opacity-75" />
      <span id="bar2" className="w-1 mr-[3px] h-1 bg-gray-500" />
      <span id="bar3" className="w-1 h-3 bg-gray-500 opacity-80" />
    </div>
  );
}

export interface NowPlayingSong {
  songUrl: string;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
}

const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-gray-400 hover:text-gray-500 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);
function index() {
  // const res = await fetch("https://api.jabed.dev/api/v1/spotify", {
  // cache:"no-cache"
  // });index.tsx
  // const data = await res.json();
  const data = {
    songUrl: "https://open.spotify.com/track/6Hj9jySrnFppAI0sEMCZpJ",
    title: "Never Gonna Give You Up",
    artist: "Rick Astley",
  };
  return (
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full md:mt10 mt-5 mb-8 ease-in-out">
      <hr className="w-full border-1 border-gray-800 mb-3" />
      <div className="flex flex-row-reverse items-center sm:flex-row mb-3 space-x-0 sm:space-x-2 w-full">
        {data?.songUrl ? (
          <AnimatedBars />
        ) : (
          <svg className="h-4 w-4 ml-auto mt-[-2px]" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
        )}
        <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">
          {data?.songUrl ? (
            <a
              className="capsize text-gray-200 font-medium  max-w-max truncate"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.title}
            </a>
          ) : (
            <p className="capsize text-gray-200 font-medium">Not Playing</p>
          )}
          <span className="capsize mx-2 text-gray-300 hidden sm:block">
            {" – "}
          </span>
          <p className="capsize text-gray-300 max-w-max truncate">
            {data?.artist ?? "Spotify"}
          </p>
        </div>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="hidden md:flex flex-col space-y-2">
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            About
          </Link>
        </div>
        <div className="flex flex-col space-y-2 ">
          <ExternalLink href="https://twitter.com/xenseee">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/jabedzaman">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.youtube.com/c/xenseee">
            YouTube
          </ExternalLink>
        </div>
        <div className="hidden md:flex flex-col space-y-2">
          <Link
            href="/posts"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Blogs
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-400 hover:text-gray-500 transition"
          >
            Guestbook
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default index;
