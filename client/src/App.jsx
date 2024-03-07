
import Navbar from './components/navbar/navbar';
import MainHero from './components/mainHero/mainhero';
import Form from './components/contactMe/form';
import AboutMe from './components/aboutMe/aboutMe';
import SkillsAndCertifications from './components/skillset/skills';
function App() {



  return (
    <main className='bg-slate-500'>
      <Navbar />
      <MainHero />
      <AboutMe />
      <SkillsAndCertifications />
      <Form />
    </main>
  );
}

export default App
