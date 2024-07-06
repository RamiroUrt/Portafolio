import { useState, useEffect } from 'react';
import { Ellipsis, X } from 'lucide-react';


import LanguageOption from './LanguageOption';
import '../assets/LanguageOption.css'


import ThemeChange from './ThemeChange';
import '../assets/ThemeChange.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="desktop-nav dark:-bg--light-black-- -bg--light-white">
        <div className="logo dark:-text--light-white "  id='logo-desk'>
          <span >Ramiro Urteaga</span>
        </div>
        <ThemeChange />
        <div className="dark:-text--light-white">
          <ul className="nav-links dark:-text--light-white">
            <li><a href="#about"
            className='dark:-text--light-white'>About me</a></li>
            <li><a href="#experience"
            className='dark:-text--light-white'>Experience</a></li>
            <li><a href="#projects"
            className='dark:-text--light-white'>Project</a></li>
            <li><a href="#contact"
            className='dark:-text--light-white'>Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav  dark:-text--light-white  dark:-bg--light-black-- -bg--light-white">
        <div className="logo">
          <span className='dark:-text--light-white'>Ramiro Urteaga</span>
        </div>
        <ThemeChange/>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`icon ${isMenuOpen ? 'hide' : 'show'}`}>
            <Ellipsis size={26} />
          </span>
          <span className={`icon ${isMenuOpen ? 'show' : 'hide'}`}>
            <X size={26} />
          </span>
        </div>
        {isMenuOpen && (
          <>
          <ul className="nav-links-hamburger dark:-text--light-white dark:-bg--light-black--">
            <li><a href="#about" onClick={closeMenu} 
            className='dark:-text--light-white'>About me</a></li>
            <li><a href="#experience"
            className='dark:-text--light-white' onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" 
            className='dark:-text--light-white' onClick={closeMenu}>Project</a></li>
            <li><a href="#contact"
            className='dark:-text--light-white'  onClick={closeMenu}>Contact</a></li>
            <div className="pt-[2rem]">
              <LanguageOption />
            </div>
          </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
