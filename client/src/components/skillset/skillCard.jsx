/* eslint-disable react/prop-types */
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import {borderBottomLeft, borderTopRight} from "../../utils/animations";
import "./index.css";

const SkillCard = ({title, titleStyle, mainIcon, technologies, technologiesTtitles}) => {
  const controlsTopRight = useAnimation();
  const controlsBottomLeft = useAnimation();
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  React.useEffect(() => {
    let animationTiemout;
    if (inView) {
        console.log("inview")
      animationTiemout = setTimeout(() => {
        controlsTopRight.start("visible");
        controlsBottomLeft.start("visible");
      }, 400);
    }
    return () => clearTimeout(animationTiemout);
  }, [controlsBottomLeft, controlsTopRight, inView]);

  const technologyElements = technologies.map((icon, index) => (
    <figure key={index} className="mx-3 mt-4">
      <div
        className="h-10 w-10 skillIcon"
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      <figcaption className="text-center mt-3 text-xs skilltitle">
        {technologiesTtitles[index]}
      </figcaption>
    </figure>
  ));

  const titleclass = title === 'tools' ? 'marginRightEnTitle' : '';

  return (
    <motion.section
      ref={ref}
      className="  flex flex-col items-center justify-center spa  card mb-20"
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
      <h2 className= {`text-2xl text-center skilltitle ${titleclass}`}   style={titleStyle}>{title}</h2>
      <figure className="icon" dangerouslySetInnerHTML={{ __html: mainIcon }} />
      <hr className="divider" />
      <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
        {technologyElements}
      </div>
    </motion.section>
  );
};

export default SkillCard