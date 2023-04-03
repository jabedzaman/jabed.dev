import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io5";

function Sidebar() {
  return (
    // <section className="sticky top-16">
    <section>
      <div className="flex lg:flex-col md:flex-col md:space-x-0 space-x-4 flex-row md:items-start items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/99767817?v=4"
          width={200}
          height={200}
          priority
          className=" rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 shadow-2xl border-4 border-gray-200 dark:border-gray-900 z-10 md:hover:shadow-lg md:dark:hover:shadow-gray-900 duration-150 ease-in-out"
          alt="Jabed Zaman"
        />
        <div className="flex flex-col mt-2 mb-5">
          <span className="md:text-2xl text-xl font-bold">Jabed Zaman</span>
          <span className="dark:text-gray-600 text-gray-400">
            Full Stack Developer
          </span>
        </div>
      </div>
      <div className="md:h-0 h-4" />
      <Socials />
      <div className="md:h-10 hidden md:inline-block" />
      <div className="flex flex-col space-y-2">
        <Link href="/guestbook">
          <div className="hidden md:inline-block border border-gray-200 dark:border-gray-700  py-3 px-4 hover:shadow-lg dark:hover:shadow-gray-900 duration-150 ease-in-out">
            Sign in Guestbook
          </div>
        </Link>
      </div>
    </section>
  );
}

function Socials() {
  return (
    <div>
      <div>
        <a
          href="https://github.com/jabedzaman"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <FiGithub className="" />
          <p className="font-semibold hover:underline underline-offset-3 md:text-sm text-xs dark:text-gray-200 text-gray-800">
            jabedzaman
          </p>
        </a>
      </div>
      <div className="dark:text-gray-300 text-gray-700">
        <a
          href="https://twitter.com/xenseee"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <FiTwitter className="" />
          <p className="hover:text-blue-500 hover:underline underline-offset-3 md:text-sm text-xs">
            xenseee
          </p>
        </a>
      </div>
      <div className="dark:text-gray-300 text-gray-700">
        <a
          href="https://reddit.com/u/jabedzaman"
          className="flex flex-row items-center space-x-1"
          target={"_blank"}
        >
          <IoLogoReddit className="" />
          <p className="hover:text-blue-500 hover:underline underline-offset-3 md:text-sm text-xs">
            jabedzaman
          </p>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
