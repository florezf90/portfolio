/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import {
  scrollToSection,
  sidebarvariants,
  sideborderAnimation,
} from "../../utils/animations";



const MenuItem = ({ sectionId, toggleMenu, children }) => {
  return (
    <motion.li
      initial="hidden"
      animate="visible"
      variants={sidebarvariants}
      whileHover={{ scale: 2 }}
      whileTap={{ scale: 4 }}
    >
      <motion.button
        onClick={() => {
          scrollToSection(sectionId);
          toggleMenu();
        }}
        aria-label={children}
        className="px-3 py-2 my-4 text-2xl font-bold rounded"
        animate="pulse"
        variants={sideborderAnimation}
      >
        {children}
      </motion.button>
    </motion.li>
  );
};

export default MenuItem;
