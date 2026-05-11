import ToggleTheme from "./ToggleTheme";
import ToggleBtn from "./ToggleBtn";
import type { ContentToggleProps } from "../../../assets/types/toggles.Types";

const ContentToggle = ({ leftIcon, rightIcon, isActive, onToggle, variant }: ContentToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <span className="icons-muted icon-dark shrink-0 w-10 h-10 flex items-center justify-center">
        {leftIcon}
      </span>

      {variant === 'theme' ? (
        <ToggleTheme isActive={isActive} onClick={onToggle} />
      ) : (
        <ToggleBtn isActive={isActive} onClick={onToggle} />
      )}

      <span className="icons-muted icon-dark shrink-0 w-10 h-10 flex items-center justify-center">
        {rightIcon}
      </span>
    </div>
  );
};

export default ContentToggle;