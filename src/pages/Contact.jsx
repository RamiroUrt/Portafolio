import { Mail } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import '../assets/css/CardCont.css';
import LanguageOption from '../components/LanguageOption';
import '../assets/css/LanguageOption.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact" id="contact">
        <p className="section_text_p text-center dark:-text--light-white">{t('contact.getInTouch')}</p>
        <h1 className="title dark:-text--light-white">{t('contact.title')}</h1>
        <div className="container mt-[4rem]">
          <div className="details_container mt-8 max-w-[500px]">
            <div className="contact-info break-all dark:-text--light-white">
              <div className="mail flex gap-2 ">
                <Mail />
                <p><a href="mailto:urteagaramiro33@gmail.com" className='dark:-text--light-white'>{t('contact.email')}</a></p>
              </div>
              <div className="linkedin flex gap-2">
                <Linkedin />
                <p><a target='_blank' href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/" className='dark:-text--light-white'>{t('contact.linkedin')}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="language">
        <LanguageOption />
      </div>
      <section className="nav_contact">
        <nav className="">
          <div className="links ">
          <a className='dark:-text--light-white dark:hover:-text--light-gray-- hover:no-underline'><span>{t('nav.name')}</span></a>
            <li><a href="#about" className='dark:-text--light-white'>{t('contact.nav.about')}</a></li>
            <li><a href="#experience" className='dark:-text--light-white'>{t('contact.nav.experience')}</a></li>
            <li><a href="#projects" className='dark:-text--light-white'>{t('contact.nav.projects')}</a></li>
            <li><a href="#contact" className='dark:-text--light-white'>{t('contact.nav.contact')}</a></li>
          </div>
        </nav>
      </section>
      <div className="footer">
        <p className='text-center'>{t('contact.footer')}</p>
      </div>
    </>
  );
}

export default Contact;
