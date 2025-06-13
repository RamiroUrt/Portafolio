import Timeline from "../../components/Timeline"
import Title from "../../components/layout/Title"
import { useI18n } from '../../context/I18nContext';

const Education = () => {

  const { t } = useI18n();

  const title = t("sections.education");

  const TimelineItems = t("education.certificates", { returnObjects: true });
  
  return (
    <section className='education layout-main'>
    <Title title={title} />
    <div className="education-container">
      <div className="education-timeline-contain">
        <Timeline items={TimelineItems} isEducation={true}/>
      </div>
    </div>
  </section>
  )
}

export default Education