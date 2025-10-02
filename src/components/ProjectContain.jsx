import React from 'react';
import Choose from './Choose';
import ImageProject from './ImageProject';
import { useI18n } from '../context/I18nContext';
import gliderItems from '../assets/constants/Glider';

const ProjectContain = ({ activeIndex, darkmode }) => {
  const { t } = useI18n();
  const activeProject = gliderItems[activeIndex];

  if (!activeProject || !activeProject.id) {
    return (
      <div className="project-contain">
        <div className="no-project-selected">
          <Choose darkMode={darkmode}/>
        </div>
      </div>
    );
  }

  const projectDescription = t(`projects.items.${activeProject.id}.description`);

  const captures = [
    activeProject.capture,
    activeProject.capture2,
    activeProject.capture3,
    activeProject.capture4,
    activeProject.capture5,
    activeProject.capture6,
    activeProject.capture7
  ].filter(capture => capture && capture !== '');

  return (
    <div className="project-contain">
      <div className="contain-details-project">
        <img 
          className="selected-project"
          src={activeProject.image}
          alt={activeProject.alt}
          title={activeProject.alt}
          loading='lazy'
        />
        
        <div className="details-text">
          <h3 className="title">{activeProject.title}</h3>
          <div className="pass"></div>
          <div className="tech">
            {activeProject.tech?.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          
          <div 
            className="description text-secondary"
            dangerouslySetInnerHTML={{ __html: projectDescription }}
          />
          
          <div className="buttons-detail">
            {activeProject.demo && (
              <button>
                <a href={activeProject.demo} target="_blank" rel="noopener noreferrer">
                  {t("projects.buttonText1")}
                </a>
              </button>
            )}
            {activeProject.github && (
              <button>
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                  {t(`projects.buttonText2`)}
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="front-page-contain">
        {captures.map((capture, index) => (
          <ImageProject 
            key={index} 
            src={capture} 
            alt={`${activeProject.title} Captura ${index + 1}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContain;
