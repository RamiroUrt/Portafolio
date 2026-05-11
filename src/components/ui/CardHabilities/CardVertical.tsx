import { SkeletonTheme } from "react-loading-skeleton";
import TitleWithIcon from "../Title/TitleWithIcon";
import ToolsIcon from "../../../assets/icons/Svg/ToolsIcon";
import ItemHabilities from "../Item/ItemHabilities";
import WorkIcon from "../../../assets/icons/Svg/WorkIcon";
import { type CardSkillProps } from "../../../assets/types/cards.Types";

const CardVertical = ({ title, data, icon, isLoading }: CardSkillProps) => {

  return (
    <div className="card-ver-contain">
      <SkeletonTheme baseColor="#B8B8B8" highlightColor="#e5e7eb">
        <div className="card-ver-header">
          <TitleWithIcon text={title} icon={icon || <ToolsIcon />} isLoading={isLoading} />
          <div className="container-vertical-item animate-item">
            {data.map((skill, index) => (
              <ItemHabilities 
                key={index}
                tech={skill.name} 
                icon={typeof skill.icon === 'function' ? <skill.icon /> : <WorkIcon />} 
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};
export default CardVertical