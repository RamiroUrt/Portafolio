import Timeline from "../../components/Timeline"
import Title from "../../components/layout/Title"
import { useI18n } from "../../context/I18nContext";



const Experience = () => {
  
  const { t } = useI18n();
  
  const timelineItems = t("experience.timeline", { returnObjects: true });
  
  return (
    <div className='experience '>
      <Title title={t("sections.experience")} />
      <div className="timeline-container">
        <div className="timeline-contain">
          <Timeline items={timelineItems}/>
        </div>
      </div>
    </div>
  )
}

export default Experience