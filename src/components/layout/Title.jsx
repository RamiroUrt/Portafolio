import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import RUAzul from '../../assets/img/RU_Azul.webp'
import RUAmarillo from '../../assets/img/RU_Amarillo.webp'
const Title = ({title}) => {
  const { darkMode } = useTheme(); 
  return (
    <div className="section-title">
    <h2 className="title">{title}</h2>
      <div className="footer-title">
        <div className="line"></div>
          <img src={darkMode ? RUAzul : RUAmarillo}
            alt="" loading='lazy' />
        <div className="line"></div>
      </div>
</div>
  )
}

export default Title