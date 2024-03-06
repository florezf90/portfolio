import { useState } from "react";

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-800 h-[10vh]">
      <div className="h-full bg-red-700  w-10/12 flex mx-auto items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-[5vh] w-20"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <button
            className="text-2xl font-bold text-gray-700 ml-1"
            onClick={() => scrollToSection("#home")}
          >
            florezf90.dev
          </button>
        </div>
        <div className="lg:flex hidden items-center bg-white space-x-3">
          <button
            onClick={() => scrollToSection("#home")}
            className="text-gray-700 hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("#about")}
            className="text-gray-700 hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("#projects")}
            className="text-gray-700 hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="text-gray-700 hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded"
          >
            Get in Touch
          </button>
        </div>
        <button className="lg:hidden block text-gray-700" onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
      <div
        className={`lg:hidden fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-center h-full transition-transform duration-300 ease-in-out z-50 bg-white shadow-md w-4/5`}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col text-center justify-center text-2xl font-bold">
          <li>
            <button
              onClick={() => scrollToSection("#home")}
              className="text-3xl py-10 w-full"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#about")}
              className="text-3xl py-10 w-full"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#projects")}
              className="text-3xl py-10 w-full"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-3xl py-10 w-full"
            >
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
