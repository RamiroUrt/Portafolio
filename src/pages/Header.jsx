import { useTranslation } from 'react-i18next';
import Nav from "../components/layout/Nav";
import Perfil from '../../public/img/avtar.png';
import BtnWhite from "../components/BtnWhite";
import BtnBlack from "../components/BtnBlack";
import SocialLInk from "../components/SocialLInk";
import ScrollButton from "../components/ScrollButton";

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
          <p className="section_text_p dark:-text--light-white">{t('profile.hello')}</p>
          <h1 className="title dark:-text--light-white">{t('profile.name')}</h1>
          <p className="section_text_p bouncy-text text-jr-text">{t('profile.role')}</p>
          <div className="btn_container">
            {/*btn white*/}
            <BtnWhite text={t('profile.downloadCV')} location={'https://drive.google.com/file/d/19veeQf8BciTijE3UatUKmEqCTrzjxywY/view?usp=sharing'} />
            {/*btn black*/}
            <a href="#contact">
              <BtnBlack text={t('profile.contactInfo')} />
            </a>
          </div>
          <p className="section_text_p2 dark:-text--light-white">{t('profile.location')}</p>
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
