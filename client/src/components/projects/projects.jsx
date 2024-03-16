import "./index.css";
import purifyIcons from "../../utils/purify";
import { siHtml5, siCss3, siNodedotjs, siJavascript } from "simple-icons";
import ProjectsCard from "./projectCard";
import { useEffect, useState } from "react";
import filterProjects from "../../utils/filter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {  projectCardAnimation, searchBarAnimation } from "../../utils/animations";

const Projects = () => {
  const iconObjects = [siHtml5, siCss3, siNodedotjs, siJavascript];

  const projectIcons = iconObjects.map((icon) => icon.svg);
  const projectTitltes = iconObjects.map((icon) => icon.title);
  const projectIconsPurified = purifyIcons(projectIcons);

  const projectTechnologies = [
    {
      name: projectTitltes,
      icon: projectIconsPurified,
    },
  ];

  const generateTechJsx = projectTechnologies.map((tech, techIndex) =>
    tech.icon.map((icon, iconIndex) => (
      <figure key={`${techIndex}${iconIndex}`} className="mx-3 mt-4">
        <div
          className="h-10 w-10 mx-3 technologies"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <figcaption className="text-center mt-4 text-white">
          {tech.name[iconIndex]}
        </figcaption>
      </figure>
    ))
  );

  const projects = [
    {
      title: "Project back-end-api",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateTechJsx,
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "back-end-api",
    },
    {
      title: "Project single-page",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateTechJsx,
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "single-page",
    },
    {
      title: "Project 2 single-page",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateTechJsx,
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "single-page",
    },
    {
      title: "Project full-stack",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateTechJsx,
      githubUrl: "https://github.com",
      liveUrl: "https://github.com",
      projectType: "full-stack",
    },
    {
      title: "Project 2 back-end-api",
      imgSrc: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam fuga ratione at assumenda architecto, quidem voluptates tempora itaque reprehenderit, eum a unde eligendi modi deserunt quo dicta minus ad?",
      technologies: generateTechJsx,
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
  }, [displayedProjects, controls]); 

  return (
    <main id="projects" className=" h-full  mx-auto flex justify-center">
      <section className="flex flex-col justify-center container w-10/12 ">
        <header className=" justify-center flex my-20 ">
          <h1 className="text-white text-6xl">Projects</h1>
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
              All
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
            Single Page
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
            Back-end API
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
            Full-Stack
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
                className="lg:w-1/3  p-4" // Adjust classes here as needed
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
