import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardProjects from '../../../components/ui/CardProjects/CardProjects';
import FilterProjects from '../../../components/ui/FilterProjects/FilterProjects';
import { projectsData } from '../../../assets/constant/projects';
import type { ProjectFilter } from '../../../assets/constant/projects';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import { useAnimateList } from '../../../hooks/useAnimate';

interface ProjectsProps {
  handleOpenScreens: (name: string) => void;
}

const Projects = ({ handleOpenScreens }: ProjectsProps) => {
  const { isLoading, containerRef } = useAnimateList('.card-contain-projects', {}, 500);
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projectsData
        : projectsData.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <PageLayout title={t('projects.title')} isLoading={isLoading}>
      <FilterProjects activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      <div className="layout-body-projects" ref={containerRef}>
        <div className="projects-grid">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => (
              <CardProjects key={`sk-${i}`} isLoading={true} id={0} onOpenScreens={() => {}} />
            ))
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <CardProjects
                key={project.id}
                onOpenScreens={handleOpenScreens}
                {...project}
                isLoading={false}
              />
            ))
          ) : (
            <p className="filter-projects__empty">{t('projects.filters.empty')}</p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
