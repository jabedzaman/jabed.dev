import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Header() {
  const [mounted, setMounted] = React.useState(false);
  const [notinview, setNotinview] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { asPath } = router;
  const subpath = asPath.split("/")[1];
  const supersubpath = asPath.split("/")[2];
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
           { !supersubpath ? <Link href="/" className="hover:underline underline-offset-2">~ jabed.me</Link> : <Link href={"/"}>..</Link>}
            {subpath && <Link href={`/${subpath}`} className="hover:underline underline-offset-2">/{subpath}</Link>}
            {supersubpath && (
              <Link href={`/${subpath}/${supersubpath}`} className="hover:underline underline-offset-2">/{supersubpath}</Link>
            )}
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
