import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const LanguageMenu = ({ animations, buttonAnimation, closesidebar }) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { i18n } = useTranslation();
  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    toggleLanguage();
  };

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        animate="pulse"
        whileTap={"tap"}
        variants={buttonAnimation}
        onClick={toggleLanguage}
        aria-label="language"
        className="  px-3 mt-1 py-3 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
      >
        Language
      </motion.button>
      <div id="language" className="absolute right-6 ">
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleLanguage}
          >
            <ul className=" flex flex-col mb-40 items-center justify-center align-middle mx-4 text-2xl font-bold ">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.5 }}
                className="text-white mt-3 mb-4 p-2  rounded border-2 border-transparent hover:border-gray-100"
                id="español"
                onClick={() => {
                  changeLanguage("es");
                  closesidebar();
                }}
              >
                español
              </motion.button>
              <motion.li
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1.5 }}
                className="mb-4 p-2"
                id="english"
                animate="pulse"
                variants={animations}
                onClick={() => {
                  changeLanguage("en");
                  closesidebar();
                }}
              >
                english
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1.5 }}
                className="text-white  mb-4 p-2  rounded border-2 border-transparent hover:border-gray-100"
                animate="pulse"
                id="deutsch"
                onClick={() => {
                  changeLanguage("de");
                  closesidebar();
                }}
              >
                Deutsch
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1.5 }}
                className="mb-4 p-2"
                animate="pulse"
                variants={animations}
                id="russian"
                onClick={() => {
                  changeLanguage("ru");
                  closesidebar();
                }}
              >
                Русский
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LanguageMenu;
