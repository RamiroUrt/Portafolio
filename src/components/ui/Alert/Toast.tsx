import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from "../../../context/ThemeContext"; 
import { useTranslation } from 'react-i18next';
import type { AlertIOSProps } from '../../../assets/types/alert.Types';


const AlertIOS = ({ show, onClose, translationKey }: AlertIOSProps) => {
  const alertRef = useRef(null);
  const { darkMode } = useTheme();
const { t } = useTranslation();


  useEffect(() => {
    if (show) {
      gsap.fromTo(alertRef.current, 
        { opacity: 0, scale: 1.1 }, 
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] bg-black/40 backdrop-blur-[2px]">
      <div 
        ref={alertRef}
        className="ios-alert-container rounded-[10px] flex flex-col overflow-hidden shadow-xl transition-colors duration-300"
        style={{
          backgroundColor: darkMode ? 'rgba(28, 28, 30, 0.9)' : 'rgba(242, 242, 242, 0.9)',
          backdropFilter: 'blur(20px)'
        }}
      >
        <div className="ios-alert-body text-center">
          <h3 
            className="font-bold text-[20px] tracking-tight"
            style={{ color: darkMode ? '#ffffff' : '#000000' }}
          >
{t(`alerts.${translationKey}.title`)}
          </h3>
          <p 
            className="text-[15px] mt-1 leading-tight px-1"
            style={{ color: darkMode ? '#ebebf5' : '#000000' }}
          >
{t(`alerts.${translationKey}.message`)}
          </p>
        </div>
        
        <button 
          onClick={onClose}
          className="ios-alert-button text-[15px] font-semibold transition-colors cursor-pointer"
          style={{ 
            color: darkMode ? '#0a84ff' : '#007aff',
            borderTop: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: 'transparent'
          }}
          onMouseDown={(e) => e.currentTarget.style.backgroundColor = darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
          onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
{t(`alerts.${translationKey}.button`)}
        </button>
      </div>
    </div>
  );
};

export default AlertIOS;