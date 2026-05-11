import type { NavButtonsProps } from "../../../assets/types/navButtons.Types";

const NavButtons = ({ goBack, goForward, handleRefresh }: NavButtonsProps) => (
  <div className="nav-btns">
    <button className="nav-btn" onClick={goBack}>‹</button>
    <button className="nav-btn" onClick={goForward}>›</button>
    <button className="nav-btn" onClick={handleRefresh}>↻</button>
  </div>
);

export default NavButtons;