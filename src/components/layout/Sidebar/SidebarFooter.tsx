import { useTheme } from '../../../context/ThemeContext'; 
import { useTranslation } from 'react-i18next';
import ContentToggle from "../../ui/Toggle/ContentToggle";
import ThemeDark from "../../../assets/icons/Svg/ThemeDark";
import ThemeLigth from "../../../assets/icons/Svg/ThemeLigth";

export const SidebarFooter = () => {
  const { i18n } = useTranslation();
  const { darkMode, toggleTheme } = useTheme(); 

  const toggleLanguage = () => {
    if (!i18n.language) return;
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <footer className='flex flex-col gap-2.5 items-center w-full footer-dark-mobile'>
        <div className="one w-full flex justify-center">
          <ContentToggle
            variant="theme"
            isActive={darkMode}
            onToggle={toggleTheme}
            leftIcon={<ThemeLigth />}
            rightIcon={<ThemeDark />}
          />
        </div>
        <div className="one w-full flex justify-center items-center">
          <ContentToggle
            variant="language"
            isActive={!!i18n.language?.startsWith('en')}
            onToggle={toggleLanguage}
            leftIcon={"ES"}
            rightIcon={"EN"}
          />
        </div>
      </footer>
    </>
  );
};