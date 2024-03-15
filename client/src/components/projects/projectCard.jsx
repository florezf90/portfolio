import "./index.css";


const ProjectsCard = ({ projectContent}) => {


  const generateCard = projectContent.map((project, i) => {


    const { title, imgSrc, projectType, description, technologies, githubUrl, liveUrl } =
      project;
    return (
      <div key={i} className=" lg:w-1/3 ">
        <section className=" bg-white flex flex-col items-center justify-center mx-auto  card mb-20">
          <h2 className="text-black text-2xl text-center my-8">{title}</h2>
          <figure className="w-10/12" aria-label={projectType}>
            <img
              src={imgSrc}
              alt="project1"
              className="projectImg h-72  mb-5 mx-auto "
            />
            <hr className="divider mx-auto" />
            <figcaption className="text-center my-6 projectDescription">
              {description}
            </figcaption>
          </figure>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center my-2">
            <a href={githubUrl}>
              <button className="my-4 mx-5">Project Code</button>
            </a>
            <a href={liveUrl}>
              <button className=" mx-5">Live Demo</button>
            </a>
          </div>
          <hr className="divider mx-auto" />
          <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
            {technologies}
          </div>
        </section>
      </div>
    );
  });

  return generateCard;
};


export default ProjectsCard;