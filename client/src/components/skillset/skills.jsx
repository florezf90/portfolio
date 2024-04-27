import "./index.css";
import {
  siHtml5,
  siBookstack,
  siMicrosoftsqlserver,
  siReact,
  siTailwindcss,
  siJavascript,
  siCss3,
  siNodedotjs,
} from "simple-icons";
import purifyIcons from "../../utils/purify";
import SkillCard from "./skillCard";
import { useTranslation } from "react-i18next";

const SkillsAndCertifications = () => {
  const svgStrings = [siHtml5.svg, siBookstack.svg, siMicrosoftsqlserver.svg];
  const frontendIconsObjects = [
    siReact,
    siTailwindcss,
    siJavascript,
    siCss3,
    siNodedotjs,
    siBookstack,
    
  ];

  const { t } = useTranslation();
  const translationKeys = t("skillcards", { returnObjects: true });
  const frontendIcons = frontendIconsObjects.map((icon) => icon.svg);
  const frontEndTittles = frontendIconsObjects.map((icon) => icon.title);

  const purifiedtitleIcons = purifyIcons(svgStrings);
  const purifiedFrontendIcons = purifyIcons(frontendIcons);

const skillCardsData = [
  {
    title: translationKeys[0],
    mainIcon: purifiedtitleIcons[0],
    technologies: purifiedFrontendIcons,
    technologiesTtitles: frontEndTittles,
  },
  {
    title: translationKeys[1],
    mainIcon: purifiedtitleIcons[1],
    technologies: purifiedFrontendIcons,
    technologiesTtitles: frontEndTittles,
  },
  {
    title: translationKeys[2],
    mainIcon: purifiedtitleIcons[2],
    technologies: purifiedFrontendIcons,
    technologiesTtitles: frontEndTittles,
  },
];

  return (
    <main className="mb-20">
      <section className="flex flex-col items-center justify-center w-10/12 mx-auto skillset ">
        <header>
          <h1 className="text-white text-6xl ntext-center mt-20 mb-10">
            {t("skillset")}
          </h1>
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-36 mt-20 container">
          {skillCardsData.map((data, index) => (
            <SkillCard
              key={index}
              title={data.title}
              mainIcon={data.mainIcon}
              technologies={data.technologies}
              technologiesTtitles={data.technologiesTtitles}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsAndCertifications;
