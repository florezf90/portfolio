import { siReact, siTailwindcss } from "simple-icons";
import felipeFlorez from "../../assets/converted2.jpg"
import purifyIcons from "../../utils/purify";
import "./index.css"
const MainHero = () => {



  const svgStrings = [siReact.svg, siTailwindcss.svg];
  const purifiedIcons = purifyIcons(svgStrings);

  return (
    <div
      id="home"
      className="h-full flex items-center justify-center mb-10 bg-slate-500"
    >
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto h-full">
        <header className="lg:w-6/12 md:w-full  p-4 flex flex-col items-center justify-center">
          <h1 className=" text-white text-6xl font-bold mb-10 text-center">
            Hello, I&apos;m felipe florez
          </h1>
          <p className="text-white text-2xl  mb-10 text-center">
            an engaging full-stack developer based in San Antonio, TX who is
            commited to deliver high-quality solutions
          </p>
          <div className="flex mb-4 flex-row">
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
            <button className=" bg-green-500 text-white px-4 py-2 rounded-lg  mb-2">
              Learn More
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg  mb-2">
              Get Started
            </button>
          </div>
        </header>
        <div className="md:w-full lg:w-6/12 flex items-center justify-center p-4 ">
          <img
            src={felipeFlorez}
            alt="Felipe Florez"
            className="florez rounded-full w-full h-auto object-cover"
            style={{ borderRadius: "50%", width: "90%", height: "95%" }} // Custom styles for oval shape
          />
        </div>
      </article>
    </div>
  );
};

export default MainHero;
