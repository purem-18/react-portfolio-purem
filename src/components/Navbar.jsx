import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/finalLogo.png";
import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // ... (keep the existing useEffect and scrollToSection functions)
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900 bg-opacity-90' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
          </div>
          
          {/* Desktop Navigation Links (centered) */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-gray-300 mx-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300 mx-2">About</button>
            <button onClick={() => scrollToSection('technologies')} className="text-white hover:text-gray-300 mx-2">Technologies</button>
            <button onClick={() => scrollToSection('experience')} className="text-white hover:text-gray-300 mx-2">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300 mx-2">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-300 mx-2">Contact</button>
          </div>

          {/* Social Media Icons (visible on both mobile and desktop) */}
          <div className="flex items-center justify-center gap-2 text-xl">
            <a href='https://www.linkedin.com/in/puremba-moirangthem-ba4981204' target="_blank" rel="noopener noreferrer" className="text-white">
              <FaLinkedin />
            </a>
            <a href='https://github.com/purem-18' target="_blank" rel="noopener noreferrer" className="text-white">
              <FaGithub />
            </a>
            <a href='https://x.com/puremba_m' target="_blank" rel="noopener noreferrer" className="text-white">
              <FaSquareXTwitter />
            </a>
            <a href='https://www.instagram.com/your_instagram_handle' target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram />
            </a>
          </div>

          {/* Burger Menu Icon (mobile only) */}
          <div className="md:hidden ml-2">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-neutral-900 bg-opacity-90">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">About</button>
            <button onClick={() => scrollToSection('technologies')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">Technologies</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-gray-300 py-2 px-4">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;