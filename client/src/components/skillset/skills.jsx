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

  const frontendIcons = frontendIconsObjects.map((icon) => icon.svg);
  const frontEndTittles = frontendIconsObjects.map((icon) => icon.title);

  const purifiedtitleIcons = purifyIcons(svgStrings);
  const purifiedFrontendIcons = purifyIcons(frontendIcons);

  return (
    <main className="bg-slate-500 h-full">
      <section className="flex flex-col items-center justify-center bg-red-500 w-10/12 mx-auto">
        <header>
          <h1 className="text-white text-6xl ntext-center mt-20">
            My Skillset
          </h1>
        </header>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-36 mt-20 container">
          <section className=" bg-white flex flex-col items-center justify-center spa  card mb-20">
            <h2 className="text-black text-2xl text-center">Front-end </h2>
            <figure
              className="icon"
              dangerouslySetInnerHTML={{ __html: purifiedtitleIcons[0] }}
            />
            <hr className="divider" />
            <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
              {purifiedFrontendIcons.map((icon, index) => (
                <figure key={index} className="mx-3 mt-4">
                  <div
                    className="h-10 w-10"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />
                  <figcaption className="text-center mt-1 text-xs">
                    {frontEndTittles[index]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section className=" bg-white flex flex-col items-center justify-center spa  card mb-20">
            <h2 className="text-black text-2xl text-center">Tools </h2>
            <figure
              className="icon"
              dangerouslySetInnerHTML={{ __html: purifiedtitleIcons[1] }}
            />
            <hr className="divider" />
            <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
              {purifiedFrontendIcons.map((icon, index) => (
                <figure key={index} className="mx-3 mt-4">
                  <div
                    className="h-10 w-10"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />
                  <figcaption className="text-center mt-1 text-xs">
                    {frontEndTittles[index]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
          <section className=" bg-white flex flex-col items-center justify-center spa  card mb-20">
            <h2 className="text-black text-2xl text-center">Back-end </h2>
            <figure
              className="icon"
              dangerouslySetInnerHTML={{ __html: purifiedtitleIcons[2] }}
            />
            <hr className="divider" />
            <div className="w-full flex flex-row flex-wrap items-center justify-center mb-4">
              {purifiedFrontendIcons.map((icon, index) => (
                <figure key={index} className="mx-3 mt-4">
                  <div
                    className="h-10 w-10"
                    dangerouslySetInnerHTML={{ __html: icon }}
                  />
                  <figcaption className="text-center mt-1 text-xs">
                    {frontEndTittles[index]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SkillsAndCertifications;
