import React, { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { buttonVariants, contentVariants, menuVariants, sideborderAnimation } from "../../utils/animations";
import {MenuIcon, CloseIcon} from "./menuIcons";
const MenuItem = React.lazy(() => import("./menuItem"));
import { scrollToSection } from "../../utils/animations";
import LanguageMenu from "./languageMenu";
import  {useTranslation} from "react-i18next"



const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {t} = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <motion.nav
      id="navbar"
      className=" h-[12vh] shadow-md"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
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
            className="px-3 py-2 text-2xl  rounded border-2 border-transparent font-bold hover:border-gray-100"
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
            className="px-3 py-2 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
          >
            {t("home")}
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#about")}
            aria-label="Home"
            className="px-3 py-2 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
          >
            {t("abouttitle")}
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#projects")}
            aria-label="Home"
            className="px-3 py-2 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
          >
            {t("projects")}
          </motion.button>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            onClick={() => scrollToSection("#contact")}
            aria-label="Home"
            className="px-3 py-2 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
          >
            {t("getInTouch")}
          </motion.button>
          <LanguageMenu animations={sideborderAnimation} buttonAnimation={sideborderAnimation} language={t("language")} />
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
              className="fixed inset-y-0 left-0 flex flex-col justify-center  z-50  sidebar w-3/4"
            >
              <button
                className="absolute top-0 right-0 mt-4 mr-4 text-blue-800"
                onClick={toggleMenu}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
              <ul  className="flex flex-col  items-center justify-center text-2xl font-bold text-center">
                <Suspense fallback={<div>Loading...</div>}>
                  <MenuItem sectionId="#home" toggleMenu={toggleMenu}>
                    {t("home")}
                  </MenuItem>
                  <MenuItem sectionId="#about" toggleMenu={toggleMenu}>
                    {t("abouttitle")}
                  </MenuItem>
                  <MenuItem sectionId="#projects" toggleMenu={toggleMenu}>
                    {t("projects")}
                  </MenuItem>
                  <MenuItem sectionId="#contact" toggleMenu={toggleMenu} >
                    {t("getInTouch")}
                  </MenuItem>
                  <LanguageMenu buttonAnimation={sideborderAnimation} closesidebar={toggleMenu}  language={t("language")}/>
                </Suspense>
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
