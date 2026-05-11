import PageLayout from "../../../components/layout/PageLayout/PageLayout" 
import CardEducation from "../../../components/ui/CardEducation/CardEducation"
import TitleWithIcon from "../../../components/ui/Title/TitleWithIcon"
import Ribbon from '../../../assets/icons/Svg/RibbonIcon'
import CapIcon from "../../../assets/icons/Svg/CapIcon"
import { mainEducation, certifications } from "../../../assets/constant/education"
import { useAnimateList } from '../../../hooks/useAnimate'
import { useTranslation } from "react-i18next"

const Education = () => {
  const { isLoading, containerRef } = useAnimateList('.education-header > *, .certificates .main-card', {}, 600); 
const { t } = useTranslation()
  return (
    <PageLayout title={t('education.title')} isLoading={isLoading}>
      <div ref={containerRef}>
        <div className="education-header">
          {mainEducation.map((edu) => (
            <CardEducation 
              key={edu.id}
              isLoading={isLoading}
              {...edu}
              icon={<CapIcon />}
            />
          ))}
        </div>

        <div className="certificates flex flex-col items-center">
          <TitleWithIcon text={t('education.certificates_title')} icon={<Ribbon/>} isLoading={isLoading} />
          <div className="main-card">
            {certifications.map((cert) => (
              <CardEducation 
                key={cert.id}
                isLoading={isLoading}
                {...cert}
                icon={<Ribbon />}
              />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Education;