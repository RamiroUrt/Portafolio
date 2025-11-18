import React from 'react'
import '../styles/ButtonToggle.css'


const ToggleButton = ({checked, onChange}) => {
  return (
    <input type="checkbox" className="theme-checkbox" checked={checked} onChange={onChange} />
  )
}

export default ToggleButton