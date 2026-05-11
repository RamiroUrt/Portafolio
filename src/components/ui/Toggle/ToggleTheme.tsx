import './css/TogleTheme.css';
import type { ToggleThemeProps } from "../../../assets/types/toggles.Types";

const ToggleTheme = ({ isActive, onClick }: ToggleThemeProps) => {
  return (
    <div className="toggle-switch">
      <label className="switch-label">
        <input 
          type="checkbox" 
          className="checkbox"
          checked={isActive} 
          onChange={onClick}
        />
        <span className="slider"></span>
      </label>
    </div>  
  );
};

export default ToggleTheme;