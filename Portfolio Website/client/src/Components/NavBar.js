import React, { useState } from "react";
import krimage from "../images/kr.png";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={krimage} className="h-8 rounded-full" alt="Flowbite Logo" />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Mern Stack Developer
          </span>
        </a>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent ${
            menuOpen ? "block" : "hidden"
          } md:flex md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
            <li>
              <a
                href="#Home"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="#ContactMe"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
