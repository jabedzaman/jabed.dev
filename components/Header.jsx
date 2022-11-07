import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (theme == null) return null;
  return (
    <header className="font-poppins">
      <div className=" dark:bg-[#171717] bg-[#fcfcfc] shadow-lg dark:shadow-[#171717]/40 dark:border-[#171717] border-b">
        <div className="lg:px-0 px-5 py-5 mx-auto flex max-w-5xl text-lg items-center justify-between text-black dark:text-gray-200">
          <div className="flex space-x-6 my-3">
            <div>
              <h3 className="headerItem">
                <Link href="/">Jabed</Link>
              </h3>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/blogs" passHref>
                <h3 className="headerItem">
                  Blog
                </h3>
              </Link>
              <Link href="/#Contact" passHref>
                <h3 className="headerItem">
                  Contact
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex space-x-10 items-center ">
            <div
              className="text-gray-700 cursor-pointer dark:bg-[#171717] hover:text-gray-500 bg-[#fcfcfc] dark:text-gray-300 p-1 rounded-full"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <BsFillMoonStarsFill />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
