import { useState, useEffect } from 'react';
import { Ellipsis, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import LanguageOption from '../LanguageOption';
import '../../assets/css/LanguageOption.css';
import ThemeChange from '../ThemeChange';
import '../../assets/css/ThemeChange.css';

const Nav = () => {
  const { t } = useTranslation();
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
        <div className="logo dark:-text--light-white" id='logo-desk'>
          <a className='dark:-text--light-white dark:hover:-text--light-gray-- hover:no-underline fixed'><span>{t('nav.name')}</span></a>
        </div>
        <div className="dark:-text--light-white contain-nav">
          <ul className="nav-links dark:-text--light-white">
            <li><a data-cursor="text" href="#about" className='dark:-text--light-white'>{t('nav.about')}</a></li>
            <li><a data-cursor="text" href="#experience" className='dark:-text--light-white'>{t('nav.experience')}</a></li>
            <li><a data-cursor="text" href="#projects" className='dark:-text--light-white'>{t('nav.projects')}</a></li>
            <li><a data-cursor="text" href="#contact" className='dark:-text--light-white'>{t('nav.contact')}</a></li>
          </ul>
        </div>
          <div className="contain-options">
            <div className="flex gap-10 cont-center">
              <div className="theme">
                <ThemeChange />
              </div>
              <LanguageOption/>
            </div>
          </div>
      </nav>
      <nav className="hamburger-nav dark:-text--light-white">
        <div className="logo">
        <a className='dark:-text--light-white dark:hover:-text--light-gray-- hover:no-underline'><span>{t('nav.name')}</span></a>        </div>
        <ThemeChange />
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
            <ul className="nav-links-hamburger dark:-text--light-white">
              <li><a data-cursor="text" href="#about" onClick={closeMenu} className='dark:-text--light-white'>{t('nav.about')}</a></li>
              <li><a data-cursor="text" href="#experience" onClick={closeMenu} className='dark:-text--light-white'>{t('nav.experience')}</a></li>
              <li><a data-cursor="text" href="#projects" onClick={closeMenu} className='dark:-text--light-white'>{t('nav.projects')}</a></li>
              <li><a data-cursor="text" href="#contact" onClick={closeMenu} className='dark:-text--light-white'>{t('nav.contact')}</a></li>
              <div className="pt-[2rem]">
                <LanguageOption  closeMenu={closeMenu}/>
              </div>
            </ul>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;
