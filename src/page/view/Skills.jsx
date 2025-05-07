
import RoadMap from "../../components/RoadMap"
import Title from "../../components/layout/Title"
import { useI18n } from '../../context/I18nContext';


const Skills = () => {
  const { t } = useI18n();
  return (
    <section className='skills layout-main'>
      <Title title={t("sections.skills")} />
      <div className="main-skills">
        <RoadMap />
      </div>
  </section>
  )
}

export default Skills