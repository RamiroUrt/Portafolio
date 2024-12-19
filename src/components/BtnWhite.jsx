/* eslint-disable react/prop-types */

import '../assets/css/BtnWhite.css';


const BtnWhite = ({ text, location, className }) => {
  return (
    <a target="_blank" href={location} download>
      <button className={`btn_white ${className} 
      dark:hover:-text--light-white
      dark:-text--light-white


      dark:-border--light-gray`}
      data-cursor="block"
       id='btn_white'>
        {text}
      </button>
    </a>
  );
}

export default BtnWhite;
