import { siReact, siTailwindcss } from "simple-icons";
import felipeFlorez from "../../assets/converted2.webp"
import purifyIcons from "../../utils/purify";
import "./index.css"
import { scrollToSection } from "../../utils/animations";
import { motion } from "framer-motion";
import { buttonVariants } from "../../utils/animations";
const MainHero = () => {
  const svgStrings = [siReact.svg, siTailwindcss.svg];
  const purifiedIcons = purifyIcons(svgStrings);

  return (
    <div id="home" className="h-full flex items-center justify-center ">
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto mb-20 ">
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
                  className="h-10 w-10 mx-3 icons"
                  dangerouslySetInnerHTML={{ __html: icon }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center space-x-7">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              onClick={() => scrollToSection("#projects")}
              aria-label="Home"
              className="px-3 my-4 py-2 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
            >
              My work
            </motion.button>

            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              onClick={() => scrollToSection("#contact")}
              aria-label="Home"
              className="px-3 py-2 my-4 text-2xl  rounded border-2 border-transparent hover:border-gray-100"
            >
              get in touch
            </motion.button>
          </div>
        </header>
        <div className="md:w-full lg:w-6/12 flex items-center justify-center ">
          <img
            src={felipeFlorez}
            alt="Felipe Florez"
            className="florez rounded-full  object-cover"
          />
        </div>
      </article>
    </div>
  );
};

export default MainHero;
