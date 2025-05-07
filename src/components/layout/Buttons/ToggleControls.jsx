import ToggleButton from '../Buttons/ToggleButton';
import Moon from '../../../assets/svg/Moon.jsx';
import Sunset from '../../../assets/svg/Sunset.jsx';
import Spain from '../../../assets/img/icons8-españa-96.webp';
import Usa from '../../../assets/img/icons8-estados-unidos-96.webp';
import { useTheme } from '../../../context/ThemeContext';
import { useI18n } from '../../../context/I18nContext';

const ToggleControls = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { locale, setLocale } = useI18n();

  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  };

  return (
    <div className="toggles-buttons">
      <div className="theme-toggle" id="theme">
        <Moon darkMode={darkMode} alt="DarkMode" className="toggle-icon" loading='lazy' />
        <ToggleButton checked={darkMode} onChange={toggleTheme} />
        <Sunset alt="Lightmode" darkMode={darkMode} className="toggle-icon" loading='lazy' />
      </div>
      <div className="theme-toggle">
        <img src={Spain} alt="Spanish flag" className="toggle-icon" loading='lazy' />
        <ToggleButton checked={locale === 'en'} onChange={toggleLanguage} />
        <img src={Usa} alt="USA flag" className="toggle-icon" loading='lazy' />
      </div>
    </div>
  );
};

export default ToggleControls;
