/* eslint-disable react/prop-types */

import '../assets/BtnBlack.css';


const BtnBlack = ({ text, locations }) => {
  return (
    <a href={locations} target='_blank'>
      <button className="btn_black">
        {text}
      </button>
    </a>
  );
}

export default BtnBlack;
