import "./index.css";
import { projectTechnologies } from "../../utils/Icons";
import DealerTracker from '../../assets/Dealer.webp';
 import ProjectsCard from "./projectCard";
import { useEffect, useState } from "react";
import filterProjects from "../../utils/filter";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {  projectCardAnimation, searchBarAnimation } from "../../utils/animations";

const Projects = () => {

function  generateProjects(icons, titles) {
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
      description: `Growth is the most crucial part of a small business; if it's not doing so, the company is dying, and one of the most effective ways to prioritize growth is by following its daily performance data.          

      That is how we came up with the idea of creating an employee dashboard. This dealer data tracker application will allow the managers of small and medium-sized companies to keep records of their employees, their KPIs, 
      and how they've been doing overtime.`,
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
