import CardProjects from '../../../components/ui/CardProjects/CardProjects';
import { projectsData } from '../../../assets/constant/projects';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import { useAnimateList } from '../../../hooks/useAnimate'
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
  handleOpenScreens: (name: string) => void;
}

const Projects = ({ handleOpenScreens }: ProjectsProps) => {
  const { isLoading, containerRef } = useAnimateList('.card-contain-projects', {}, 500);
  const { t } = useTranslation();

  return (
    <PageLayout title={t('projects.title')} isLoading={isLoading}>
      <div className="layout-body-projects" ref={containerRef}>
        <div className="projects-grid">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              // Para los esqueletos, el id 0 está bien, pero no necesitamos redundancia
              <CardProjects key={`sk-${i}`} isLoading={true} id={0} onOpenScreens={() => {}} />
            ))
          ) : (
            projectsData.map((project) => (
              <CardProjects 
                key={project.id} // Obligatorio para React
                onOpenScreens={handleOpenScreens}
                {...project}     // Aquí ya entra el 'id', 'title', etc.
                isLoading={false}
              />
            ))
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;