/* eslint-disable react/prop-types */
import "./index.css";
import {  sideborderAnimation, borderTopRight, borderBottomLeft } from "../../utils/animations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const ProjectsCard = ({ projectContent }) => {
  const controlsBottomLeft = useAnimation();
  const controlsTopRight = useAnimation();

  const { ref, inView } = useInView({ threshold: 1, triggerOnce: true });
  React.useEffect(() => {
    let animationTimeout;
    if (inView) {
      animationTimeout = setTimeout(() => {
        controlsBottomLeft.start("visible");
        controlsTopRight.start("visible");
      }, 200);
    }
    return () => clearTimeout(animationTimeout);
  }, [controlsBottomLeft, controlsTopRight, inView]);

  const {
    title,
    imgSrc,
    projectType,
    description,
    technologies,
    githubUrl,
    liveUrl,
  } = projectContent;
  return (
    <div>
      <motion.section
        initial="rest"
        whileHover={{ scale: 1.05 }}
        animate="visible"
        className="  flex flex-col items-center justify-center mx-auto  card mb-20"
      >
        <motion.div
          className="border-draw border-draw-top-right"
          variants={borderTopRight}
          initial="hidden"
          animate={controlsTopRight}
        />
        <motion.div
          className="border-draw border-draw-bottom-left"
          variants={borderBottomLeft}
          initial="hidden"
          animate={controlsBottomLeft}
        />
        <h2 ref={ref} className="text-white text-2xl text-center my-8">
          {title}
        </h2>
        <figure className="w-10/12" aria-label={projectType}>
          <img
            src={imgSrc}
            alt="project1"
            className="projectImg h-72  mb-5 mx-auto "
          />
          <hr className="divider mx-auto" />
          <figcaption className="text-center my-6 projectDescription text-white">
            {description}
          </figcaption>
        </figure>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center my-2">
          <a href={githubUrl}>
            <motion.button
              whileHover="hover"
              whileTap={{ scale: 2 }}
              variants={sideborderAnimation}
              animate="pulse"
              aria-label="Project Code"
              className="my-4 mx-5 p-4 rounded text-white"
            >
              Project Code
            </motion.button>
          </a>
          <a href={liveUrl}>
            <motion.button
              whileTap={{ scale: 2 }}
              aria-label="Live Demo"
              animate="pulse"
              variants={sideborderAnimation}
              className=" mx-5 p-4 rounded text-white"
            >
              Live Demo
            </motion.button>
          </a>
        </div>
        <hr className="divider mx-auto" />
        <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
          {technologies}
        </div>
      </motion.section>
    </div>
  );
};


export default ProjectsCard;