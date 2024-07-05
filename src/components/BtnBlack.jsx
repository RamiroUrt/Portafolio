/* eslint-disable react/prop-types */

import '../assets/BtnBlack.css';


const BtnBlack = ({ text, locations }) => {
  return (
    <a href={locations} target='_blank'>
      <button className="btn_black
            dark:-border--light-gray
            dark:hover:-bg--light-black">
        {text}
      </button>
    </a>
  );
}

export default BtnBlack;
