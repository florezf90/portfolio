import "./index.css";

const AboutMe = () => {
  return (
    <main
      id="home"
      className="h-screen  flex items-center  justify-center bg-slate-500"
    >
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto  h-full">
        <header className="lg:w-6/12 md:w-full bg-neutral-600 p-4 flex flex-col items-center justify-center">
          <h1 className=" text-white text-6xl font-bold mb-10 text-center">
            Hello, I&apos;m felipe florez
          </h1>
          <p className="text-white text-2xl  mb-10 text-center">
            an engaging full-stack developer based in San Antonio, TX who is
            commited to deliver high-quality solutions
          </p>

          <div className="flex flex-row items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg  mb-2">
              Learn More
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg  mb-2">
              Get Started
            </button>
          </div>
        </header>
        <div className="md:w-full lg:w-6/12 flex items-center justify-center p-4 bg-red-900 h-full">
        </div>
      </article>
    </main>
  );
};

export default AboutMe;
