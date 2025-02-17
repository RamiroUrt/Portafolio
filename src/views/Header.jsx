import { useTranslation } from 'react-i18next';
import Nav from "../components/layout/Nav";
import Perfil from '../../public/img/avtar.png';
import BtnWhite from "../components/BtnWhite";
import BtnBlack from "../components/BtnBlack";
import SocialLInk from "../components/SocialLInk";
import ScrollButton from "../components/ScrollButton";

import PDF from '../../public/download/CV_RAMIRO_URTEAGA.pdf';

import BlockRevealAnimation from 'react-block-reveal-animation';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <section id='profile' className="profile">
        <div className="section_pic">
          <img src={Perfil} alt={t('profile.name')} className='dark:-z-[-11]'/>
          <div className="back-pic dark:-bg--light-gray-- dark:-z-[-2]"></div>
        </div>
        <div className="section_text ">
          <p data-cursor="text" className="section_text_p dark:-text--light-white">{t('profile.hello')}</p>
        <BlockRevealAnimation delay={0.5} duration={1} color="#F59E0B">
          <h1 data-cursor="text" className="title dark:-text--light-white">{t('profile.name')}</h1>
        </BlockRevealAnimation>
        <div className="w-auto">
          <BlockRevealAnimation delay={1} duration={1} color="#F59E0B">
            <p data-cursor="text" className="w-[auto] section_text_p bouncy-text text-jr-text">{t('profile.role')}</p>
            </BlockRevealAnimation>
        </div>
          <div className="btn_container">
            {/*btn white*/}
            <BtnWhite text={t('profile.downloadCV')} location={PDF} />
            {/*btn black*/}
            <a href="#contact">
              <BtnBlack text={t('profile.contactInfo')} />
            </a>
          </div>
          <div className="w-auto">
            <BlockRevealAnimation delay={1} duration={1} color="#F59E0B">
              <p data-cursor="text" className="section_text_p2 dark:-text--light-white">{t('profile.location')}</p>
            </BlockRevealAnimation>
          </div>
          <div className="social_link">
            {/*Social Link*/}
            <SocialLInk />
          </div>
        </div>
      </section>
      <div className="mx-0 flex text-center justify-center">
        <ScrollButton />
      </div>
    </>
  );
};

export default Header;


