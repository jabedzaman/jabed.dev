import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

function Header() {
  const [mounted, setMounted] = React.useState(false);
  const [notinview, setNotinview] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { asPath } = router;
  const isHome = asPath === "/" ? true : false;
  const prevPath = asPath.split("/")[asPath.split("/").length - 2];
  // const subpath = asPath.split("/")[1];
  // const supersubpath = asPath.split("/")[2];
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  React.useEffect(() => setMounted(true), []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNotinview(true);
    } else {
      setNotinview(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <React.Fragment>
      <header
        className={`sticky top-0 z-30 backdrop-filter backdrop-blur-sm transition-all duration-500
        ${notinview ? "shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-5xl mx-auto p-5 flex flex-row justify-between items-center">
          <div className="font-bold md:text-xl text-lg">
            <Link href="/" className="hover:underline underline-offset-2">
              jabed.me
            </Link>
            {/* {subpath && <Link href={`/${subpath}`} className="hover:underline underline-offset-2">/{subpath}</Link>} */}
            {/* {supersubpath && ( */}
            {/* <Link href={`/${subpath}/${supersubpath}`} className="hover:underline underline-offset-2">/{supersubpath}</Link> */}
            {/* )} */}
            {/* {isHome ? (
              <Link
                href={`/`}
                className="hover:underline underline-offset-2 flex flex-row items-center ease-in-out duration-150"
              >
                jabed.me
              </Link>
            ) : (
              <Link
                href={`/${prevPath}`}
                className="hover:underline underline-offset-2 flex flex-row items-center ease-in-out duration-150"
              >
                <IoIosArrowBack className="mr-2" />
                jabed.me
              </Link>
            )} */}
          </div>
          <div>
            {mounted ? (
              <div
                className="text-gray-700 cursor-pointer  hover:text-gray-500 dark:text-gray-300"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <FaSun /> : <BsFillMoonStarsFill />}
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
