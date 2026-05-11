import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import DateIcon from "../../../assets/icons/Svg/DateIcon";
import WorkIcon from "../../../assets/icons/Svg/WorkIcon";
import Badge from "../Badge";
import type { TimelineProps, TimelineItem } from "../../../assets/types/timeline.types";
import '../../../styles/fonts.css';
import { useTranslation } from 'react-i18next';

const TimelineSkeleton = () => (
  <div className="skeleton-wrapper">
    <div className="flex items-center gap-2 mb-2">
      <Skeleton circle width={20} height={20} />
      <Skeleton width={120} height={20} />
    </div>
    <Skeleton width="80%" height={25} className="mb-2" />
    <Skeleton width="40%" height={15} className="mb-3" />
    <Skeleton count={3} height={12} className="mb-1" />
    <div className="flex gap-2 mt-4">
      <Skeleton width={50} height={20} borderRadius={10} />
      <Skeleton width={50} height={20} borderRadius={10} />
    </div>
  </div>
);

const Timeline = ({ data, isLoading }: TimelineProps) => { 
const { t } = useTranslation();
const itemsArray = isLoading ? Array(3).fill({}) : data;

  return (
    <div className="layout-body-experience">
      <div className="timeline-container">
        <div className="timeline-line"></div>

        <SkeletonTheme baseColor="#B8B8B8" highlightColor="#e5e7eb">
          {itemsArray.map((item: TimelineItem, index) => (
            <div 
              key={isLoading ? `skeleton-${index}` : item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ opacity: isLoading ? 1 : 0 }} 
            >
              <div className="timeline-dot"></div>
              
              <div className="timeline-card">
                {isLoading ? (
                  <TimelineSkeleton />
                ) : (
                  <>
                    <div className="card-header-timeline">
                      <span className="icon-company icons-muted shrink-0 w-5 h-5 flex items-center justify-center">
                        <WorkIcon />
                      </span>
                      <span className="company-name">{item.company}</span>
                    </div>

                    {/* Mapeo dinámico: busca en el JSON usando el ID de la constante */}
                    <h3 className="role-title">
                      {t(`experience.jobs.${item.id}.role`)}
                    </h3>

                    <div className="date-text date-font">
                      <span className="icons-muted shrink-0 w-5 h-5 flex items-center justify-center">
                        <DateIcon />
                      </span>
                      {t(`experience.jobs.${item.id}.date`)}
                    </div>

                    <p className="description-text">
                      {t(`experience.jobs.${item.id}.description`)}
                    </p>

                    <div className="tag-container">
                      {item.tags?.map((tag) => (
                        <Badge key={tag} text={tag} />
                      ))}
                    </div>
                    
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="timeline-link download">
                        <span className="subtitle">Linkedin</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default Timeline;