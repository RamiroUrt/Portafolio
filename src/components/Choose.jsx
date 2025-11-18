import { useTheme } from '../context/ThemeContext';
import ChooseLight from '../assets/gif/Choose-light.gif';
import ChooseDark from '../assets/gif/Choose-dark.gif';
import { useI18n } from '../context/I18nContext';

const Choose = () => { 
  const { darkMode } = useTheme();  

  const { t } = useI18n();

  return (
    <>
    <div className='chose flex'>
      <img 
        src={darkMode ? ChooseDark : ChooseLight} 
        alt="Seleccionar uno" 
        className="choose-image"
        loading='lazy' 
      />
      <h1 className='title-chose'>{t("projects.choose")}</h1>
    </div>
    </>
  );
};

export default Choose;