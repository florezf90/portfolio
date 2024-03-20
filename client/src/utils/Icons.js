import purifyIcons from "./purify";
import {
  siHtml5,
  siCss3,
  siNodedotjs,
  siJavascript,
  siReact,
  siGraphql,
  siBootstrap,
  siExpress,
  siMongodb,
  siApollographql,
  siVite,
} from "simple-icons";


  const dealerTech = [
    siReact,
    siGraphql,
    siBootstrap,
    siExpress,
    siMongodb,
    siApollographql,
    siVite,
  ];

  const projectIcons = [
    siHtml5,
    siCss3,
    siNodedotjs,
    siJavascript,
  ];
  const genericIcons = projectIcons.map((icon) => icon.svg); 
  const projectTitltes = projectIcons.map((icon) => icon.title);
  const projectIconsPurified = purifyIcons(genericIcons);

    const dealerIcons = dealerTech.map((icon) => icon.svg);
    const dealerTitles = dealerTech.map((icon) => icon.title);
    const dealerIconsPurified = purifyIcons(dealerIcons);


export const projectTechnologies = [
  {
    name: dealerTitles,
    icon: dealerIconsPurified,
  },
  {
 name: projectTitltes,
    icon: projectIconsPurified,
  }
]