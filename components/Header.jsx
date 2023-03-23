import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Header() {
  const [notinview, setNotinview] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNotinview(true);
    } else {
      setNotinview(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();
  const [route, setRoute] = useState(router.route);
  useEffect(() => {
    setRoute(router.route);
  }, [router.route]);

  return (
    <header className="w-full flex lg:px-0">
      <div
        className={`backdrop-filter backdrop-blur-lg transition-all duration-500 fixed top-0 left-0 right-0 z-50 ${
          notinview ? "shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex text-lg items-center justify-between max-w-5xl px-5 lg:py-3 py-2 ">
          <div className="italic flex flex-row space-x-2">
            ~
            <Link href="/" className="hover:underline underline-offset-2">
              {" "}
              jabed.me
            </Link>
            {route !== "/" && (
              <Link href="/" className="hover:underline underline-offset-2">
                {" "}
                / {route.replace("/", "")}
              </Link>
            )}
          </div>
          <div
            className="text-gray-700 cursor-pointer  hover:text-gray-500 dark:text-gray-300"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FaSun /> : <BsFillMoonStarsFill />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
