import './index.css'
import purifyIcons from '../../utils/purify';
import { siInstagram, siLinkedin, siGithub } from 'simple-icons';
import { motion } from "framer-motion";

const Footer = () => {

    const iconObjects = [siLinkedin, siGithub, siInstagram];
    const socialSvg = iconObjects.map((icon) => icon.svg);
    const socialIcons = purifyIcons(socialSvg);
    const socialMediaLinks = [
      "https://www.linkedin.com/in/luis-felipe-florez-98403123a/",
      "https://github.com/florezf90",
      "https://www.instagram.com/luisflorez2259/",
    ];

        const scrollToSection = (sectionId) => {
          const section = document.querySelector(sectionId);
          section.scrollIntoView({ behavior: "smooth" });
        };


    const socialMedia = [{
      icon: socialIcons,
      link: socialMediaLinks
    }]

     const generateSocialJsx = socialMedia.map((social, socialIndex) => social.icon.map((icon, iconIndex) =>
    <a href={social.link[iconIndex]} key={iconIndex}>
      <motion.div
      whileTap={{ scale: 1.5 }}
        key={`${socialIndex}${iconIndex}`}
        className="h-10 w-10 mx-3 icons"
        dangerouslySetInnerHTML={{ __html: icon }}/>
    </a>
    ))


return (
  <footer className="w-10/12 mx-auto  h-2/4 flex lg:flex-row flex-col">
    <section
      id="footerNav"
      className="lg:w-1/3 h-96 flex flex-col items-center justify-center "
    >
      <h1 className="text-white text-3xl font-bold">Useful Links</h1>
      <ul className="py-6">
        <li className="my-2">
          <motion.button
          whileTap={{ scale: 0.8 }}
            onClick={() => scrollToSection("#about")}
            className="text-white text-xl font-bold"
          >
            About
          </motion.button>
        </li>
        <li className="my-2">
          <motion.button
          whileTap={{ scale: 0.8 }}            
          onClick={() => scrollToSection("#projects")}
            className="text-white text-xl font-bold"
          >
            Projects
          </motion.button>
        </li>

      </ul>
    </section>
    <section
      id="icon"
      className="lg:w-1/3 flex flex-col items-center justify-center "
    >
      <a href="#navbar">
        <motion.h1 
        whileInView={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="text-white text-3xl font-bold lg:my-0 my-28">
          Florezf90.dev
        </motion.h1>
      </a>
    </section>
    <section
      id="footerSocial"
      className="lg:w-1/3 flex flex-col items-center justify-center "
    >
      <h1 className="text-white text-3xl font-bold mb-10 mt-20 lg:mt-0">
        Social Media
      </h1>
      <div className="flex flex-row mt-2 mb-14">{generateSocialJsx}</div>
    </section>
  </footer>
); 

}


export default Footer;