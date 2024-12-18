import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import '../assets/css/CardCont.css';
import LanguageOption from '../components/LanguageOption';
import '../assets/css/LanguageOption.css';
import { useTranslation } from 'react-i18next';
import Carta from '../components/Carta';
import ButtonCopy from '../components/ButtonCopy';
const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact relative" id="contact">
        <p data-cursor="text" className="section_text_p text-center dark:-text--light-white">{t('contact.getInTouch')}</p>
        <h1 data-cursor="text" className="title dark:-text--light-white">{t('contact.title')}</h1>
          <div className="carta-contain">
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
                  className="carta-background">
                    <Carta />
                  </div>
          </div>
        <div className="container mt-[4rem]">
          <div className="details_container overflow-visible mt-8 max-w-[500px] px-[10em] py-2">
            <div className="contact-info break-all dark:-text--light-white">
              <div className="mail flex gap-2 ">
                <div className="copy">
                <Mail />
                  <p data-cursor="text">
                    <a href="mailto:urteagaramiro33@gmail.com" className='dark:-text--light-white'>{t('contact.email')}</a>
                  </p>
                    <ButtonCopy/>
                </div>
              </div>
              <div className="linkedin flex gap-2">
                <Linkedin />
                <p data-cursor="text" ><a target='_blank' href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/" className='dark:-text--light-white'>{t('contact.linkedin')}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="languaje">
        <LanguageOption />
      </div>
      <section className="nav_contact">
        <nav className="">
          <div className="links ">
          <a className='dark:-text--light-white dark:hover:-text--light-gray-- hover:no-underline'><span>{t('nav.name')}</span></a>
            <li><a data-cursor="text" href="#about" className='dark:-text--light-white'>{t('contact.nav.about')}</a></li>
            <li><a data-cursor="text" href="#experience" className='dark:-text--light-white'>{t('contact.nav.experience')}</a></li>
            <li><a data-cursor="text" href="#projects" className='dark:-text--light-white'>{t('contact.nav.projects')}</a></li>
            <li><a data-cursor="text" href="#contact" className='dark:-text--light-white'>{t('contact.nav.contact')}</a></li>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Contact;
