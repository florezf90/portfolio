/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/animations";

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

const MenuItem = ({ sectionId, toggleMenu, children }) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={variants}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 2.5 }}
    >
      <button
        onClick={() => {
          scrollToSection(sectionId);
          toggleMenu();
        }}
        aria-label={children}
        className="  px-3 py-4 text-2xl font-bold rounded"
      >
        {children}
      </button>
    </motion.li>
  );
};

export default MenuItem;