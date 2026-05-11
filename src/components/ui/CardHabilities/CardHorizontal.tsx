import { SkeletonTheme } from "react-loading-skeleton";
import TitleWithIcon from "../Title/TitleWithIcon";
import ToolsIcon from "../../../assets/icons/Svg/ToolsIcon";
import ItemHabilities from "../Item/ItemHabilities";
import WorkIcon from "../../../assets/icons/Svg/WorkIcon";
import Badge from "../Badge";
import { type CardSkillProps } from "../../../assets/types/cards.Types";

const CardHorizontal = ({ title, icon, data, variant = 'default', isLoading }: CardSkillProps) => {

  return (
    <main className="card-hor-contain">
      <SkeletonTheme baseColor="#B8B8B8" highlightColor="#e5e7eb">
        <TitleWithIcon text={title} icon={icon || <ToolsIcon />} isLoading={isLoading}/>
        
        <div className={`card-hor-body flex flex-wrap gap-4 p-2.5 w-full ${variant === 'badges' ? 'justify-start' : 'justify-around'}`}>
          {data.map((skill, index) => (
            <div key={index} className="animate-item">
              {variant === 'badges' ? (
                <Badge text={skill.name} isLoading={isLoading} />
              ) : (
                <ItemHabilities 
                  key={index}
                  tech={skill.name} 
                  icon={typeof skill.icon === 'function' ? <skill.icon /> : <WorkIcon />} 
                  isLoading={isLoading}
                />
              )}
            </div>
          ))}
        </div>
      </SkeletonTheme> 
    </main>
  );
}

export default CardHorizontal