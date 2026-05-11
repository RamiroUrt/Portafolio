import SectionSkills from '../../../components/ui/SectionSkills/SectionSkills';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import { useAnimateList } from '../../../hooks/useAnimate'
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
const { isLoading, containerRef } = useAnimateList('.card-hor-contain, .card-ver-contain, .animate-item', {}, 500);
  return (
    <PageLayout title={t('skills.title')} isLoading={isLoading}>
      <div className="layout-body-skills" ref={containerRef}>
        <SectionSkills isLoading={isLoading}/>
      </div>
    </PageLayout>
  );
};

export default Skills;