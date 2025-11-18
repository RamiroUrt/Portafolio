import React from 'react'
import './layout/styles/RoadMap.css'
import Title from '../components/layout/Skills/Title'
import Badge from './layout/Skills/Badge'
import technologies from '../assets/constants/Badge'
import { useI18n } from '../context/I18nContext'

const RoadMap = () => {
  const { t } = useI18n();
  return (
    <section className='roadmap-container'>
       <Title title={t("experience.Fundamentals")} />
       <div className="badge-contain">
       {technologies.fundamentos.map(tech => (
          <Badge key={tech.id} icon={tech.icon} text={tech.text} alt={tech.alt} />
        ))}
       </div>
       <Title title="- Fronted" />
       <div className="badge-contain">
        {technologies.frontend.map(tech => (
          <Badge key={tech.id} icon={tech.icon} text={tech.text} />
        ))}
       </div>
       <Title title="- Backend" />
      <div className="badge-contain">
        {technologies.backend.map(tech => (
          <Badge key={tech.id} icon={tech.icon} text={tech.text} />
        ))}
      </div>
      <Title title={t("experience.Databases")} />
      <div className="badge-contain">
        {technologies.databases.map(tech => (
          <Badge key={tech.id} icon={tech.icon} text={tech.text} />
        ))}
      </div>
    </section>
  )
}

export default RoadMap