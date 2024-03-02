import React, { useState } from 'react';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
//   Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

// function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }  

  return (
    <nav className="navbar h-[10vh] bg-slate-800 ">
      <div className=" h-full bg-white w-10/12 flex mx-auto items-center justify-between">
        <div className="flex items-center ">
          <img
            className="h-[5vh] w-20"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <a  className="  text-2xl font-bold ml-1" href="/">florezf90.dev</a>
        </div>
        <div className="lg:flex hidden items-center bg-white space-x-3">
            <a href="#home" className="text-dark hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded">Home</a>
            <a href="#about" className="text-dark hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded">About</a>
            <a href="#Projects" className="text-dark hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded">Projects</a>
            <a href="#Contact" className="text-dark hover:bg-slate-200 px-3 py-2 text-2xl font-bold rounded">get in touch</a>
        </div>
        <button className='lg:hidden block text-dark' onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        </button>
      </div>
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white  w-4/5 mx-auto mt-2 rounded-lg shadow-md text-center text-2xl font-bold`} >
        <a href="#home" className="block text-dark px-3 py-2 text-xl ">Home</a>
        <a href="#about" className="block text-dark px-3 py-2 text-xl">About</a>
        <a href="#projects" className="block text-dark px-3 py-2 text-xl">Projects</a>
        <a href="#contact" className="block text-dark px-3 py-2 text-xl">Get in Touch</a>
       </div>
    </nav>
    
  );
};

export default Navbar;
