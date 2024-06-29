/* eslint-disable react/prop-types */

import '../assets/BtnWhite.css';


const BtnWhite = ({ text, location, className }) => {
  return (
    <a target="_blank" href={location}>
      <button className={`btn_white ${className}`}>
        {text}
      </button>
    </a>
  );
}

export default BtnWhite;
