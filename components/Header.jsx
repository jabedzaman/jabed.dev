import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="font-poppins  lg:px-0">
      <div className="lg:px-0 px-5 py-5 mx-auto flex max-w-3xl text-lg items-center justify-between  ">
        <div className="flex space-x-6 my-3">
          <div className="flex flex-row items-center">
            <div className="md:hidden inline-block">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {/*  menu svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/" passHref>
                    <h3 className="headerItem">Home</h3>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/#projects" passHref>
                    <h3 className="headerItem">Projects</h3>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/guestbook" passHref>
                    <h3 className="headerItem">Guestbook</h3>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="/#contact" passHref>
                    <h3 className="headerItem">Contact</h3>
                  </Link>
                </MenuItem>
              </Menu>
            </div>
            <h3 className="headerItem">
              <Link href="/">Jabed</Link>
            </h3>
          </div>
          <div className="hidden md:flex space-x-8">
            {/* <Link href="/blogs" passHref>
                                <h3 className="headerItem">Blog</h3>
                            </Link>
                            <Link href="/#Contact" passHref>
                                <h3 className="headerItem">Contact</h3>
                            </Link> */}
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
    </header>
  );
}

export default Header;
