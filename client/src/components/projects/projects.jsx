import "./index.css";
import { projectTechnologies } from "../../utils/Icons";
import DealerTracker from '../../assets/Dealer.webp';
 import ProjectsCard from "./projectCard";
import { useEffect, useState } from "react";
import filterProjects from "../../utils/filter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {  projectCardAnimation, searchBarAnimation } from "../../utils/animations";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const translationKeys = t("projectType", { returnObjects: true });
  const projectTranslationKeys = t("projectDescription", {
    returnObjects: true,
  });

  


  function generateProjects(icons, titles) {
    return icons.map((icon, index) => (
      <figure key={index} className="mx-3 mt-4">
        <div
          className="h-10 w-10 mx-auto technologies"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <figcaption className="text-center mt-4 text-white">
          {titles[index]}
        </figcaption>
      </figure>
    ));
  }

  const projects = [
    {
      title: "Dealer Data Tracking App",
      imgSrc: DealerTracker,
      description: projectTranslationKeys[0],
      technologies: generateProjects(
        projectTechnologies[0].icon,
        projectTechnologies[0].name
      ),
      githubUrl: "https://github.com/florezf90/dealer-data-tracker",
      liveUrl: "https://dealer-data-tracker.onrender.com/",
      projectType: "full-stack",
    },
    {
      title: "Project single-page",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateProjects(
        projectTechnologies[1].icon,
        projectTechnologies[1].name
      ),
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "single-page",
    },
    {
      title: "Project 2 single-page",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateProjects(
        projectTechnologies[0].icon,
        projectTechnologies[1].name
      ),
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "single-page",
    },
    {
      title: "Project back-end-api",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateProjects(
        projectTechnologies[0].icon,
        projectTechnologies[1].name
      ),
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "back-end-api",
    },
    {
      title: "Project 2 back-end-api",
      imgSrc: "",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateProjects(
        projectTechnologies[0].icon,
        projectTechnologies[1].name
      ),
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "back-end-api",
    },
  ];

  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [showAllButton, setShowAllButton] = useState(false);
  const controls = useAnimation();

  const handleFilterClick = async (filterType) => {
    await controls.start("hidden");
    setShowAllButton(true);
    const filteredProjects = filterProjects(projects, filterType);
    setDisplayedProjects(filteredProjects);
  };

  useEffect(() => {
    const showProjects = async () => {
      await controls.start("visible");
    };

    if (displayedProjects.length > 0) {
      showProjects();
    }
  }, [displayedProjects, controls,]);

  return (
    <main key={i18n.language} id="projects" className=" h-full  mx-auto flex justify-center">
      <section className="flex flex-col justify-center container w-10/12 ">
        <header className=" justify-center flex my-20 ">
          <h1 className="text-white text-6xl">{t("projects")}</h1>
        </header>
        <div className="filters h-full   w-6/12 mx-auto flex flex-col lg:flex-row justify-center  lg:space-x-10">
          {showAllButton && (
            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={searchBarAnimation}
              className="filterbtn"
              type="button"
              onClick={() => handleFilterClick("All")}
            >
              {translationKeys[3]}
            </motion.button>
          )}
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={searchBarAnimation}
            className="filterbtn"
            type="button"
            onClick={() => handleFilterClick("single-page")}
          >
            {translationKeys[0]}
          </motion.button>
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={searchBarAnimation}
            className="filterbtn"
            type="button"
            onClick={() => handleFilterClick("back-end-api")}
          >
            {translationKeys[1]}
          </motion.button>
          <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={searchBarAnimation}
            className="filterbtn"
            type="button"
            onClick={() => handleFilterClick("full-stack")}
          >
            {translationKeys[2]}
          </motion.button>
        </div>
        <article className="flex flex-wrap w-full mx-auto h-full mt-20">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={projectCardAnimation}
                initial="hidden"
                animate={controls}
                exit="hidden"
                className="lg:w-1/3  p-4"
              >
                <ProjectsCard projectContent={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </article>
      </section>
    </main>
  );
};

export default Projects;
