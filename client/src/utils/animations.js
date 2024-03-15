
export const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
  },
  tap: {
    scale: 0.95,
  },
};

export const contentVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 120,
      damping: 20,
      delay: 0.4,
      when: "beforeChildren",
    },
  },
};

export const menuVariants = {
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

export const sidebarvariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
    },
  },
};

export const sideborderAnimation = {
  pulse: {
    boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.6)",
    transition: {
      boxShadow: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
};

export const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};

export const borderTopRight = {
  hidden: {
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
  },
  visible: {
    width: "100%",
    height: "100%",
    borderTopColor: "#00FFF0", // Replace with your color
    borderRightColor: "#00FFF0",
    transition: {
      delay: 2,
      width: { duration: 0.25, ease: "easeOut" },
      height: { duration: 0.25, ease: "easeOut", delay: 0.25 },
    },
  },
};

export const borderBottomLeft = {
  hidden: {
    width: 0,
    height: 0,
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
  },
  visible: {
    width: "100%",
    height: "100%",
    borderBottomColor: "#00FFF0", 
    borderLeftColor: "#00FFF0",
    transition: {
      delay: 2,
      width: { duration: 0.25, ease: "easeOut", delay: 0.5 },
      height: { duration: 0.25, ease: "easeOut", delay: 0.75 },
    },
  },
};