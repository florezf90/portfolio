import { siReact, siTailwindcss } from "simple-icons";
import felipeFlorez from "../../assets/converted2.webp"
import purifyIcons from "../../utils/purify";
import "./index.css"
const MainHero = () => {

    const scrollToSection = (sectionId) => {
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    };



  const svgStrings = [siReact.svg, siTailwindcss.svg];
  const purifiedIcons = purifyIcons(svgStrings);

  return (
    <div
      id="home"
      className="h-full flex items-center justify-center mb-10"
    >
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto ">
        <header className="lg:w-6/12 md:w-full  p-4 flex flex-col items-center justify-center">
          <h1 className=" text-6xl font-bold my-10 text-center">
            Hello, I&apos;m felipe florez
          </h1>
          <p className="text-2xl  mb-10 text-center">
            an engaging full-stack developer based in San Antonio, TX who is
            commited to deliver high-quality solutions
          </p>
          <div className="mb-4">
            <div className="flex flex-row">
              {purifiedIcons.map((icon, index) => (
                <div
                  key={index}
                  className="h-10 w-10 mx-3"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
              <button 
              onClick={() => scrollToSection("#projects")}
              className=" bg-green-500 text-white px-4 py-2 rounded-lg  mb-2">
                My portfolio
              </button>
          
            <button 
            onClick={() => scrollToSection("#contact")}
            className="bg-red-500 text-white px-4 py-2 rounded-lg  mb-2">
              Contact Me
            </button>
          </div>
        </header>
        <div className="md:w-full lg:w-6/12 flex items-center justify-center ">
          <img
            src={felipeFlorez}
            alt="Felipe Florez"
            className="florez rounded-full  object-cover"
            // style={{ borderRadius: "50%", width: "90%", height: "80%" }} // Custom styles for oval shape
          />
        </div>
      </article>
    </div>
  );
};

export default MainHero;
