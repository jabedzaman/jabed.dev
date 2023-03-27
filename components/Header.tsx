import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

type Props = {};

function Header({}: Props) {
  const [mounted, setMounted] = React.useState(false);
  const [notinview, setNotinview] = React.useState(false);
  const { theme, setTheme } = useTheme();
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
        className={`sticky top-0 backdrop-filter backdrop-blur-lg transition-all duration-500
        ${notinview ? "shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="max-w-5xl mx-auto p-5 flex flex-row justify-between">
          <div>
            <Link href="/" className="hover:underline underline-offset-2">
              ~ jabed.me
            </Link>
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
