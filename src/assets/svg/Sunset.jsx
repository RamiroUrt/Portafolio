import React from 'react';

const Sunset = ({ darkMode }) => {
  return (
    <svg 
      width="24px" 
      height="24px" 
      viewBox="0 0 32 32" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg"
      className="sunset-icon"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <title>sunset-2</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Icon-Set" transform="translate(-360.000000, -827.000000)" fill={darkMode ? "#007AFF" : "#F59E0B"}>
            <path d="M388,853 L364,853 C363.447,853 363,853.447 363,854 C363,854.553 363.447,855 364,855 L388,855 C388.553,855 389,854.553 389,854 C389,853.447 388.553,853 388,853 L388,853 Z M391,849 L361,849 C360.447,849 360,849.447 360,850 C360,850.553 360.447,851 361,851 L391,851 C391.553,851 392,850.553 392,850 C392,849.447 391.553,849 391,849 L391,849 Z M381,857 L371,857 C370.447,857 370,857.447 370,858 C370,858.553 370.447,859 371,859 L375.996,859 L376,859 L376.004,859 L381,859 C381.553,859 382,858.553 382,858 C382,857.447 381.553,857 381,857 L381,857 Z M362.588,847 C362.21,845.731 362,844.391 362,843 C362,835.269 368.268,829 376,829 C383.732,829 390,835.269 390,843 C390,844.391 389.79,845.731 389.412,847 L391.476,847 C391.806,845.72 392,844.384 392,843 C392,834.164 384.837,827 376,827 C367.163,827 360,834.164 360,843 C360,844.384 360.194,845.72 360.524,847 L362.588,847 L362.588,847 Z" id="sunset-2"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Sunset;