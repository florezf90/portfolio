import "./index.css";
import mewalking from "../../assets/mewalking.jpg";
import meLooking from "../../assets/looking.jpg";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="h-full  flex items-center  justify-center bg-blue-500"
    >
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto  h-full">
        <div className="md:w-full lg:w-6/12 flex items-center justify-center p-4 h-full relative mb-20 mt-10">
          <img
            src={mewalking}
            alt="felipe-walking"
            className="mewalking object-cover"
          />
          <img
            src={meLooking}
            alt="felipe-walking"
            className="meLooking absolute bottom-0 left-0 w-80  object-cover"
          />
        </div>
        <header className="lg:w-6/12 md:w-full p-4 flex flex-col items-start justify-center">
          <h1 className="text-white text-6xl font-bold mb-10 text-center">
            About me
          </h1>
          <p className="text-white text-2xl mb-10 text-center">
            Thank you for taking the time to visit my website. My name is
            Felipe, a young
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start md:space-x-28 mt-5">
            <div>
              <h1 className="text-white text-2xl font-bold">Name:</h1>
              <p className="text-white mb-8">felipe florez</p>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">Education:</h1>
              <p className="text-white mb-8">UTSA Coding Bootcamp (2024)</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start space-x-0 md:space-x-20 mt-5">
            <div>
              <h1 className="text-white text-2xl font-bold">Location:</h1>
              <p className="text-white mb-8">San Antonio, TX</p>
            </div>
            <div className="md:ml-20">
              <h1 className="text-white text-2xl font-bold">Email:</h1>
              <p className="text-white mb-8">florezf90@gmail.com</p>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};

export default AboutMe;
