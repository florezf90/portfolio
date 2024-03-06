import { siReact, siTailwindcss } from "simple-icons";
import DOMPurify from "dompurify";
import felipeFlorez from "../../assets/converted2.jpg"
import "./index.css"
const MainHero = () => {
  const svgPurified = (svgs) => {
    return svgs.map((svg) => DOMPurify.sanitize(svg));
  };

  const siReactMarkup = siReact.svg;
  const siTailwindcssMarkup = siTailwindcss.svg;

  const svgStrings = [siReactMarkup, siTailwindcssMarkup];
  const purifiedIcons = svgPurified(svgStrings);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-slate-500"
    >
      <div className="flex flex-col lg:flex-row w-10/12 mx-auto bg-slate-100 h-full">
        <header className="lg:w-6/12 md:w-full bg-neutral-600 p-4 flex flex-col items-center justify-center">
          <h1 className=" text-white text-6xl font-bold mb-10 text-center">
            Hello, I&apos;m felipe florez
          </h1>
          <p className="text-white text-2xl  mb-10 text-center">
            an engaging full-stack developer based in San Antonio, TX who is
            commited to deliver high-quality solutions
          </p>
          <div className="flex mb-4 flex-row">
            <div
              dangerouslySetInnerHTML={{ __html: purifiedIcons }}
              className="h-10 w-10 mx-3"
            />
            <div
              dangerouslySetInnerHTML={{ __html: purifiedIcons[1] }}
              className="h-10 w-10"
            />
            <siTailwindcss className="text-white text-5xl mx-2" />
          </div>
          <div className="flex flex-row items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg  mb-2">
              Learn More
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg  mb-2">
              Get Started
            </button>
          </div>
        </header>
        <div className="md:w-full lg:w-6/12 bg-green-400 flex items-center justify-center p-4">
          <figure className="flex flex-shrink-0">
            <div className="w-full max-w-xs h-60 md:h-80 lg:h-100 rounded-full overflow-hidden flex justify-center items-center bg-white">
              <img
                alt="Felipe Florez"
                src={felipeFlorez}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <figcaption className="sr-only">Felipe Florez</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
