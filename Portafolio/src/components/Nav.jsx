import { useState, useEffect } from 'react';
import { Ellipsis, X } from 'lucide-react';

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
      <nav className="desktop-nav">
        <div className="logo">
          <span>Ramiro Urteaga</span>
        </div>
        <div className="">
          <ul className="nav-links">
            <li><a href="#about">About me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav className="hamburger-nav">
        <div className="logo">
          <span>Ramiro Urteaga</span>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`icon ${isMenuOpen ? 'hide' : 'show'}`}>
            <Ellipsis size={26} />
          </span>
          <span className={`icon ${isMenuOpen ? 'show' : 'hide'}`}>
            <X size={26} />
          </span>
        </div>
        {isMenuOpen && (
          <ul className="nav-links-hamburger">
            <li><a href="#about" onClick={closeMenu}>About me</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu}>Project</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
