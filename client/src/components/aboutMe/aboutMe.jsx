import "./index.css";
import mewalking from "../../assets/mewalking.webp";
import meLooking from "../../assets/looking.webp";
import purifyIcons from "../../utils/purify";
import { siReadme } from "simple-icons";
import myResume from "../../assets/Myresume.pdf"
import { useTranslation } from "react-i18next";


const AboutMe = () => {

  const readMeIcon = [siReadme.svg];
 const purifiedReadMeIcon = purifyIcons(readMeIcon);
 const {t} = useTranslation();



  return (
    <main id="about" className="h-full  flex items-center  justify-center">
      <article className="flex flex-col lg:flex-row w-10/12 mx-auto container">
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
          <h1 className="text-white text-6xl font-bold mb-10 mt-20 text-center">
            {t("abouttitle")}
          </h1>
          <p className="text-white text-2xl mb-10 text-left">
            {t("aboutDescription")}
          </p>

          <h1 className="text-white text-6xl font-bold my-10 text-center">
            {t("mission")}
          </h1>
          <p className="text-white text-2xl mb-10 text-left">
            {t("missionDescription")}
          </p>

          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start md:space-x-28 mt-5">
            <div>
              <h1 className="text-white text-2xl font-bold">{t("name")} :</h1>
              <p className="text-white mb-8">{t("felipe")}</p>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">
                {t("education")} :
              </h1>
              <p className="text-white mb-8">UTSA Coding Bootcamp (2024)</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start space-x-0 md:space-x-20 mt-5 mb-20">
            <div>
              <h1 className="text-white text-2xl font-bold">{t("resume")} :</h1>
              <a href={myResume}>
                <div
                  dangerouslySetInnerHTML={{ __html: purifiedReadMeIcon }}
                  className="text-white mb-10 saes"
                  aria-label="resumeIcon"
                  role="img"
                />
              </a>
            </div>
            <div className="md:ml-20">
              <h1 className="text-white text-2xl font-bold">{t("email")} :</h1>
              <p className="text-white mb-8">florezf90@gmail.com</p>
            </div>
          </div>
        </header>
      </article>
    </main>
  );
};

export default AboutMe;
