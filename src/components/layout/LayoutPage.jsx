import {useTheme} from '../../context/ThemeContext';
import {useI18n}  from '../../context/I18nContext';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import ButtonDownload from './Buttons/ButtonDownload';
import Argentina from '../../assets/img/icons8-argentina-96.webp';
import ButtonCopy from './Buttons/ButtonCopy.jsx';
import Avatar from '../../assets/img/AvatarIA2.webp';
import ToggleControls from './Buttons/ToggleControls.jsx';
import { useState, useEffect, useCallback } from 'react';

const titles = ['-Frontend Developer-', '-Web Developer-', '-UI Designer-',];
const LayoutPage = ({ children }) => {
  
  const { darkMode, toggleTheme } = useTheme();
  const { locale, setLocale } = useI18n();
  const { t } = useI18n();
  
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [maskedEmail, setMaskedEmail] = useState("******@gmail.com");
  const emailReal = "urteagaramiro33@gmail.com";
  
  const toggleLanguage = () => {
    const newLocale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  };

  // Función para generar el email enmascarado
  const generateMaskedEmail = useCallback(() => {
    let result = "";
    const visibleChars = 2; // Caracteres visibles al inicio/final
    
    for(let i = 0; i < emailReal.length; i++) {
      if(i < visibleChars || 
         i >= emailReal.length - visibleChars || 
         emailReal[i] === "@" || 
         emailReal[i] === ".") {
        result += emailReal[i];
      } else {
        // Aleatoriedad más dinámica (cambia más frecuentemente)
        result += Math.random() > 0.7 ? emailReal[i] : "*";
      }
    }
    return result;
  }, [emailReal]);

  // Efecto para el texto que gira
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setFlipping(false);
      }, 300);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Efecto para la animación INFINITA del email
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setMaskedEmail(generateMaskedEmail());
    }, 300); // Cambia cada 300ms
    
    return () => clearInterval(animationInterval);
  }, [generateMaskedEmail]);

  return (
    <>
      <aside className="sidebar">
        <div className="profile">
          <img src={Avatar} alt="Profile" title='Ramiro Urteaga' className="profile-img" loading='lazy' />
        </div>
        <div className="profile-text">
          <h1 className='title'>{t('profile.name')}</h1>
          <p className={`text-secondary flip-text ${flipping ? 'flipping' : ''}`}>        
          {titles[index]}
          </p>
        </div>

        <div className="contact-info text-center justify-center">
          <h3 className='title'>{t('profile.contact')}</h3>
          <div className="text-secondary contact-text">
            <div className="flex items-center text-center justify-center">
              <ButtonCopy textToCopy={emailReal} />
              <p className='text-secondary text-center justify-center w-full email-display'>
                {maskedEmail}
              </p>
            </div>
            <div className="location text-center justify-center w-full">
              <a href="https://www.google.com/maps/place/Maggiolo,+Santa+Fe/@-33.7256167,-62.2552533,3699m/data=!3m1!1e3!4m6!3m5!1s0x95c88df3d4f9fa2f:0xe48eb437036ca61c!8m2!3d-33.7247131!4d-62.2469973!16s%2Fg%2F121_zm_z!5m1!1e3?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D" target="_blank">
                <img src={Argentina} alt="Argentina flag" loading='lazy' />
              </a>
              <p className='text-secondary flex justify-center w-full text-center'>Maggiolo-Santa Fe</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <button className="icon-btn">
            <a target="_blank"  href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/">
              <LinkedinIcon darkMode={darkMode} />
            </a>
          </button>
          <button className="icon-btn">
            <a href="https://github.com/RamiroUrt" target="_blank">
              <GitHubIcon darkMode={darkMode} />
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