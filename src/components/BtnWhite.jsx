/* eslint-disable react/prop-types */

import '../assets/BtnWhite.css';


const BtnWhite = ({ text, location, className }) => {
  return (
    <a target="_blank" href={location}>
      <button className={`btn_white ${className} 
      dark:hover:-text--light-white
      dark:-text--light-white
      dark:-bg--font-black
      dark:hover:-bg--light-black
      dark:-border--light-gray`} id='btn_white'>
        {text}
      </button>
    </a>
  );
}

export default BtnWhite;
