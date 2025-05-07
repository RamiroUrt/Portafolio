
import {useTheme} from '../../context/ThemeContext';
import {useI18n}  from '../../context/I18nContext';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import ButtonDownload from './Buttons/ButtonDownload';
import Argentina from '../../assets/img/icons8-argentina-96.webp';
import ButtonCopy from './Buttons/ButtonCopy.jsx';
import Avatar from '../../assets/img/AvatarIA2.webp';
import ToggleControls from './Buttons/ToggleControls.jsx';
const LayoutPage = ({ children }) => {
  const { darkMode, toggleTheme } = useTheme();
  const { locale, setLocale } = useI18n();
  
  const { t } = useI18n();

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="profile">
          <img src={Avatar} alt="Profile" className="profile-img" loading='lazy' />
        </div>
        <div className="profile-text">
          <h1 className='title'>{t('profile.name')}</h1>
          <p className='text-secondary'>{t('profile.role')}</p>
        </div>

        <div className="contact-info">
          <h3 className='title'>{t('profile.contact')}</h3>
          <div className="text-secondary contact-text">
            <div className="flex gap-3 items-center">
              <p className='text-secondary'>******@gmail.com</p>
              <ButtonCopy />
            </div>
            <div className="location">
              <p className='text-secondary'>Maggiolo-Santa Fe</p>
              <a href="https://www.google.com/maps/place/Maggiolo,+Santa+Fe/@-33.7256167,-62.2552533,3699m/data=!3m1!1e3!4m6!3m5!1s0x95c88df3d4f9fa2f:0xe48eb437036ca61c!8m2!3d-33.7247131!4d-62.2469973!16s%2Fg%2F121_zm_z!5m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D" target="_blank">
                <img src={Argentina} alt="Argentina flag" loading='lazy' />
              </a>
            </div>
          </div>
        </div>

        <div className="social-links">
          <button className="icon-btn">
            <a target="_blank"  href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/">
              <LinkedinIcon />
            </a>
          </button>
          <button className="icon-btn">
            <a href="https://github.com/RamiroUrt" target="_blank">
              <GitHubIcon />
            </a>
          </button>
        </div>
        
        <div className="download-contain">
            <ButtonDownload />
        </div>
        
        <div className="toggles-buttons">
           <ToggleControls />
        </div>
      </aside>
      
      <div className="layout">
        {children}
      </div>
    </>
  );
};

export default LayoutPage;