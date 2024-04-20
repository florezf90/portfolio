
import Navbar from './components/navbar/navbar';
import MainHero from './components/mainHero/mainhero';
import Form from './components/contactMe/form';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';
import SkillsAndCertifications from './components/skillset/skills';
import Footer from './components/footer/footer';
function App() {


  return (
    <main >
      <Navbar />
      <MainHero />
      <AboutMe />
      <SkillsAndCertifications />
      <Projects />
      <Form />
      <Footer/>
    </main>
  );
}

export default App
