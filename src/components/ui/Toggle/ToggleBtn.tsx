import './css/ToggleBtn.css';
import type { ToggleBtnProps } from "../../../assets/types/toggles.Types";

const ToggleBtn = ({ isActive, onClick }: ToggleBtnProps) => {
  return (
    <div className="ui-toggle">
      <label className="ui-toggle__label">
        <input 
          type="checkbox" 
          className="ui-toggle__input"
          checked={isActive} 
          onChange={onClick} 
        />
        <span className="ui-toggle__slider"></span>
      </label>
    </div>  
  );
};

export default ToggleBtn;