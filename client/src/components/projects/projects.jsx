import "./index.css";

const Projects = () => {
  return (
    <main id="projects" className=" h-full  mx-auto flex justify-center">
      <section className="flex flex-col justify-center w-10/12 bg-black">
        <header className=" justify-center flex my-20 ">
          <h1 className="text-white text-6xl">Projects</h1>
        </header>
        <div className="filters h-full bg-slate-50 w-6/12 mx-auto flex flex-col lg:flex-row justify-center  lg:space-x-10">
          <button className="filterbtn" type="button">
            All
          </button>
          <button className="filterbtn" type="button">
            Single Page
          </button>
          <button className="filterbtn" type="button">
            Back-end API
          </button>
          <button className="filterbtn" type="button">
            Full-Stack
          </button>
        </div>
        <article className="flex flex-col lg:flex-row w-full mx-auto h-full bg-red-950 mt-20">
        <div className=" bg-slate-600 lg:w-6/12">
            <h1 className="text-white text-6xl">Single Page</h1>
          </div>
          <div className=" bg-blue-200 lg:w-6/12">
            <h1 className="text-white text-6xl">Full-Stack</h1>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
