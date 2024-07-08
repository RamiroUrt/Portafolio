import { useTranslation } from 'react-i18next';
import Nav from "../components/Nav";
import Perfil from '../../public/img/Perfil.jpg';
import BtnWhite from "../components/BtnWhite";
import BtnBlack from "../components/BtnBlack";
import SocialLInk from "../components/SocialLInk";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <section id='profile' className="profile">
        <div className="section_pic">
          <img src={Perfil} alt={t('profile.name')} />
        </div>
        <div className="section_text ">
          <p className="section_text_p dark:-text--light-white">{t('profile.hello')}</p>
          <h1 className="title dark:-text--light-white">{t('profile.name')}</h1>
          <p className="section_text_p bouncy-text text-jr-text">{t('profile.role')}</p>
          <div className="btn_container">
            {/*btn white*/}
            <BtnWhite text={t('profile.downloadCV')} location={'https://drive.google.com/file/d/1SefpHY4_zVY9b2N5ujIiGV9YMJpIpn-o/view'} />
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
    </>
  );
};

export default Header;
