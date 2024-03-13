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


export   const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
};