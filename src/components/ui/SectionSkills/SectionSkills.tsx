import { SKILLS_DATA } from "../../../assets/constant/skills";
import CardHorizontal from "../CardHabilities/CardHorizontal";
import CardVertical from "../CardHabilities/CardVertical";
import MindSeeIcon from "../../../assets/icons/Svg/MindSeeIcon";
import ToolsIconv2 from "../../../assets/icons/Svg/ToolsIconv2";
import { useTranslation } from "react-i18next";

const SectionSkills = ({ isLoading }: { isLoading: boolean }) => {  
  const { t } = useTranslation();
  return (
    <div className="section-skills-container flex flex-col gap-6">
      
      <div className="card-skills-container">
        <CardHorizontal
title={t('skills.categories.fundamentals')}
          data={SKILLS_DATA.fundamentals}
          isLoading={isLoading}
        />
        <div className="flex flex-col md:flex-row items-stretch gap-4 w-full mobile-card-hor">
          <CardVertical title="Frontend" data={SKILLS_DATA.frontend} isLoading={isLoading} />
          <CardVertical title="Backend" data={SKILLS_DATA.backend} isLoading={isLoading} />
          <CardVertical title="Databases" data={SKILLS_DATA.database} isLoading={isLoading} />
        </div>
        <CardHorizontal
title={t('skills.categories.tools')}
          icon={<ToolsIconv2/>}
          data={SKILLS_DATA.tools}
          isLoading={isLoading}
        />
        <CardHorizontal
title={t('skills.categories.soft_skills')}
          icon={<MindSeeIcon/>}
data={SKILLS_DATA.social.map(s => ({ ...s, name: t(s.name) }))}
          variant="badges"
          isLoading={isLoading}
        />
      </div>

    </div>
  );
};

export default SectionSkills;