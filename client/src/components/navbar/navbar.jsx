import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
  },
  tap: {
    scale: 0.95,
  },
};




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

const CloseIcon = () => (
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
);

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

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
    <motion.nav
      id="navbar"
      className="bg-navy-900 h-[10vh] shadow-md"
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
    >
      <div className="h-full w-10/12 flex mx-auto items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-[5vh] w-20"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="px-3 py-2 text-2xl font-bold rounded border-2 border-transparent hover:border-gray-100"
            aria-label="Home"
            onClick={() => scrollToSection("#home")}
          >
            florezf90.dev
          </motion.button>
        </div>
        <div className="hidden lg:flex items-center space-x-3">
          <motion.button
            onClick={() => scrollToSection("#home")}
            aria-label="Home"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="px-3 py-2 text-2xl font-bold rounded border-2 border-transparent hover:border-gray-100"
          >
            Home
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#about")}
            aria-label="Home"
            className="px-3 py-2 text-2xl font-bold rounded border-2 border-transparent hover:border-gray-100"
          >
            About
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#projects")}
            aria-label="Home"
            className="px-3 py-2 text-2xl font-bold rounded border-2 border-transparent hover:border-gray-100"
          >
            Projects
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#contact")}
            aria-label="Home"
            className="px-3 py-2 text-2xl font-bold rounded border-2 border-transparent hover:border-gray-100"
          >
            get in touch
          </motion.button>
        </div>
        <motion.button
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          aria-label="Menu"
          className="block lg:hidden"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </motion.button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-y-0 left-0 flex flex-col justify-center h-full z-50 bg-white w-4/5"
            >
              <button
                className="absolute top-0 right-0 mt-4 mr-4 text-blue-800"
                onClick={toggleMenu}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
              <ul className="flex flex-col items-center justify-center text-2xl font-bold text-center">
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("#home");
                      toggleMenu();
                    }}
                    aria-label="Home"
                    className="text-blue-800 hover:bg-blue-200 px-3 py-4 text-2xl font-bold rounded"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      scrollToSection("#about");
                      toggleMenu();
                    }}
                    aria-label="Home"
                    className="text-blue-800 hover:bg-blue-200 px-3 py-4 text-2xl font-bold rounded"
                  >
                    About
                  </button>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection("#projects");
                        toggleMenu();
                      }}
                      aria-label="Home"
                      className="text-blue-800 hover:bg-blue-200 px-3 py-4 text-2xl font-bold rounded"
                    >
                      Projects
                    </button>
                    <li>
                      <button
                        onClick={() => {
                          scrollToSection("#contact");
                          toggleMenu();
                        }}
                        aria-label="Home"
                        className="text-blue-800 hover:bg-blue-200 px-3 py-4 text-2xl font-bold rounded"
                      >
                        Get In Touch
                      </button>
                    </li>
                  </li>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-blue-800 bg-opacity-25 z-40"
              onClick={toggleMenu}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
