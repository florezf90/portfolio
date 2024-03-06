
import Navbar from './components/navbar/navbar';
import MainHero from './components/mainHero/mainhero';
import Form from './components/contactMe/form';
import AboutMe from './components/aboutMe/aboutMe';
function App() {



  return (
    <main className='bg-slate-500'>
      <Navbar />
      <MainHero />
      <AboutMe />
      <Form />
    </main>
  );
}

export default App
