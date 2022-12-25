import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <header className="font-poppins opacity-80">
            <div className=" shadow-lg border-b-[#fcfcfc] dark:border-b-gray-900">
                <div className="lg:px-0 px-5 py-5 mx-auto flex max-w-3xl text-lg items-center justify-between  ">
                    <div className="flex space-x-6 my-3">
                        <div>
                            <h3 className="headerItem">
                                <Link href="/">Jabed</Link>
                            </h3>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <Link href="/blogs" passHref>
                                <h3 className="headerItem">Blog</h3>
                            </Link>
                            <Link href="/#Contact" passHref>
                                <h3 className="headerItem">Contact</h3>
                            </Link>
                            <Link href="/guestbook" passHref>
                                <h3 className="headerItem">Guestbook</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="flex space-x-10 items-center ">
                        <div
                            className="text-gray-700 cursor-pointer  hover:text-gray-500 dark:text-gray-300 p-1"
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
