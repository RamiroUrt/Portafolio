import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Badge from "../Badge";
import FloatingTab from '../FloatingTab';
import TitleWithIcon from '../Title/TitleWithIcon';
import { type CardProjectsProps } from "../../../assets/types/cards.Types";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const CardProjects = ({ id, fontPage, tags, isLoading }: CardProjectsProps) => {  const cardRef = useRef<HTMLDivElement>(null);
const { t } = useTranslation();



  useEffect(() => {
    if (!isLoading && cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, [isLoading]);

  return (
    <div className="card-contain-projects" ref={cardRef} style={{ opacity: isLoading ? 1 : 0 }}>
      {!isLoading && <FloatingTab />}
      
      <div className="card-font-page">
        {isLoading ? (
          <Skeleton height={250} borderRadius={10} />
        ) : (
          <img src={fontPage} alt={t(`projects.items.${id}.title`)} />
        )}
      </div>
      
      <div className="card-body">
        <div className="card-header">
          {isLoading ? (
            <Skeleton width={100} height={50} borderRadius={10} />
          ) : (
            <div className="card-title">
              <TitleWithIcon text={t(`projects.items.${id}.title`)} icon='' />
            </div>
          )}
        </div>

        <div className="card-description">
          {isLoading ? (
            <Skeleton height={100} width="100%" />
          ) : (
            <p className='description-text'>{t(`projects.items.${id}.description`)}</p>
          )}
        </div>

        <div className="card-tech">
          {isLoading ? (
            <div className="flex gap-2">
              <Skeleton width={60} height={24} borderRadius={10} count={3} containerClassName="flex gap-2" />
            </div>
          ) : (
            tags?.map((tag, index) => <Badge key={index} text={tag} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProjects;