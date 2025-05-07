import React from 'react'
import PDF from '/pdf/CV.Ramiro.Urteaga.pdf'
import {useI18n}  from '../../../context/I18nContext';
const ButtonDownload = () => {
  const { locale, setLocale } = useI18n();

  const { t } = useI18n();
  
  return (
 <a href={PDF} target="_blank" download className='download-contain'>
    <button
  className="cursor-pointer  rounded-full text-(--orange-color) tracking-wider shadow-xl hover:scale-105 duration-500 hover:ring-1 hover:bg-var(--ligth-gray--)"
>
   <span className='download'>{t('download')}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      className="animate-bounce"
      color='var(--orange-color)'
      style={{ color: ".dark:#007AFF" }}
    >
      <path
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      ></path>
    </svg>
</button>
</a>
  )
}

export default ButtonDownload