import Timeline from "../../../components/ui/Timeline/Timeline";
import PageLayout from "../../../components/layout/PageLayout/PageLayout";
import { MY_EXPERIENCE } from "../../../assets/constant/experience";
import { useAnimateList } from '../../../hooks/useAnimate'
import { useTranslation } from "react-i18next";

const animConfig = {
  from: { opacity: 0, y: 50 },
  to: { stagger: 0.2, duration: 0.8 }
};

const Experience = () => {
const { t } = useTranslation();
const { isLoading, containerRef } = useAnimateList('.timeline-item', animConfig, 600);


  return (
    <PageLayout title={t('experience.title')} isLoading={isLoading}>
      <div ref={containerRef} className="experience-container">
        <Timeline data={MY_EXPERIENCE} isLoading={isLoading} />
      </div>
    </PageLayout>
  );
};

export default Experience;