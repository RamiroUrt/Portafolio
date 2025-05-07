import React from 'react'

const Badge = ({icon, text}) => {
  return (
    <>
    <div className="box-badge">
        <div className="icon-skills">
            <img src={icon} alt="" loading='lazy'/>
        </div>
            <div className="box-text">{text}</div>
    </div>
    </>
  )
}

export default Badge