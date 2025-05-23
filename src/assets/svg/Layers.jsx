import React from 'react'

const Layers = ({className, onClick, darkMode}) => {
  return (
    <>
        <svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}  onClick={onClick}>
        <path d="M10.5 10.5V13.5C10.5 14.0523 10.0523 14.5 9.5 14.5H1.5C0.947715 14.5 0.5 14.0523 0.5 13.5V5.5C0.5 4.94772 0.947715 4.5 1.5 4.5H4.5M4.5 1.5V9.5C4.5 10.0523 4.94772 10.5 5.5 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V1.5C14.5 0.947716 14.0523 0.5 13.5 0.5H5.5C4.94772 0.5 4.5 0.947715 4.5 1.5Z" stroke={darkMode ? "#007AFF" : "#F59E0B"}  />
        </svg>
    </>
  )
}

export default Layers