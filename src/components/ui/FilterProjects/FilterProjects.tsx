import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { FiBarChart2, FiGrid, FiLayers, FiMonitor, FiTerminal } from 'react-icons/fi';
import type { ProjectFilter } from '../../../assets/constant/projects';
import './FilterProjects.css';

interface FilterOption {
  id: ProjectFilter;
  labelKey: string;
  icon: ReactNode;
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', labelKey: 'projects.filters.all', icon: <FiGrid /> },
  { id: 'fullstack', labelKey: 'projects.filters.fullstack', icon: <FiLayers /> },
  { id: 'frontend', labelKey: 'projects.filters.frontend', icon: <FiMonitor /> },
  { id: 'console', labelKey: 'projects.filters.console', icon: <FiTerminal /> },
  { id: 'data', labelKey: 'projects.filters.data', icon: <FiBarChart2 /> },
];

interface FilterProjectsProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

const FilterProjects = ({ activeFilter, onFilterChange }: FilterProjectsProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="filter-projects"
      role="group"
      aria-label={t('projects.filters.aria_label')}
    >
      {FILTER_OPTIONS.map(({ id, labelKey, icon }) => {
        const isActive = activeFilter === id;

        return (
          <button
            key={id}
            type="button"
            className={`filter-projects__btn${isActive ? ' is-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onFilterChange(id)}
          >
            <span className="filter-projects__icon" aria-hidden="true">
              {icon}
            </span>
            <span className="filter-projects__label">{t(labelKey)}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterProjects;
