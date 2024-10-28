import '../assets/css/LanguageOption.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// eslint-disable-next-line react/prop-types
const LanguageOption = ({ closeMenu }) => {
  const { t } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value === 'option1' ? 'en' : 'es';
    i18next.changeLanguage(selectedLanguage);
    closeMenu();
  };

  return (
    <div className="wrapper">
      <div className="option">
        <input
          checked={i18next.language === 'en'}
          value="option1"
          name="btn"
          type="radio"
          className="input"
          onChange={handleLanguageChange}
        />
        <div className="btn">
          <span className="span dark:-text--light-white">{t('language.english')}</span>
        </div>
      </div>
      <div className="option">
        <input
          checked={i18next.language === 'es'}
          value="option2"
          name="btn"
          type="radio"
          className="input"
          onChange={handleLanguageChange}
        />
        <div className="btn">
          <span className="span dark:-text--light-white">{t('language.spanish')}</span>
        </div>
      </div>
    </div>
  );
}

export default LanguageOption;
