import "./index.css";
import purifyIcons from "../../utils/purify";
import { siHtml5, siCss3, siNodedotjs, siJavascript } from "simple-icons";
import ProjectsCard from "./projectCard";
import { useState } from "react";
import filterProjects from "../../utils/filter";

const Projects = () => {
     

    const iconObjects = [siHtml5, siCss3, siNodedotjs, siJavascript];

    const projectIcons = iconObjects.map((icon) => icon.svg);
    const projectTitltes = iconObjects.map((icon) => icon.title);
    const projectIconsPurified = purifyIcons(projectIcons);

    const projectTechnologies = [
        {
            name: projectTitltes,
            icon: projectIconsPurified
        }
    ]

    const generateTechJsx = projectTechnologies.map((tech, techIndex) => tech.icon.map((icon, iconIndex) => 
    <figure key={`${techIndex}${iconIndex}`} className="mx-3 mt-4">
        <div className="h-10 w-10 mx-3"
        dangerouslySetInnerHTML={{ __html:icon}}/>
        <figcaption className="text-center mt-4">{tech.name[iconIndex]}</figcaption>
    </figure>))

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
  const handleFilterClick = (filterType) => {
    const filteredProjects = filterProjects(projects, filterType);
    setDisplayedProjects(filteredProjects);
  };

  return (
    <main id="projects" className=" h-full  mx-auto flex justify-center">
      <section className="flex flex-col justify-center w-10/12 bg-black">
        <header className=" justify-center flex my-20 ">
          <h1 className="text-white text-6xl">Projects</h1>
        </header>
        <div className="filters h-full bg-slate-50 w-6/12 mx-auto flex flex-col lg:flex-row justify-center  lg:space-x-10">
          <button
            className="filterbtn"
            type="button"
            onClick={() => handleFilterClick("All")}
          >
            All
          </button>
          <button
            className="filterbtn"
            type="button"
            onClick={() => handleFilterClick("single-page")}
          >
            Single Page
          </button>
          <button className="filterbtn" type="button"
          onClick={() => handleFilterClick("back-end-api")}
          >
            Back-end API
          </button>
          <button className="filterbtn" type="button"
          onClick={() => handleFilterClick("full-stack")}
          >
            Full-Stack
          </button>
        </div>
        <article className="flex flex-row flex-wrap w-full mx-auto h-full bg-red-950 mt-20">
          <ProjectsCard projectContent={displayedProjects} />
        </article>
      </section>
    </main>
  );
};

export default Projects;
