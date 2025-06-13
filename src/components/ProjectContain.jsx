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
        {activeProject.capture && <ImageProject src={activeProject.capture} alt={`${activeProject.title} Captura 1`} />}
        {activeProject.capture2 && <ImageProject src={activeProject.capture2} alt={`${activeProject.title} Captura 2`} />}
        {activeProject.capture3 && <ImageProject src={activeProject.capture3} alt={`${activeProject.title} Captura 3`} />}
        {activeProject.capture4 && <ImageProject src={activeProject.capture4} alt={`${activeProject.title} Captura 4`} />}
        {activeProject.capture4 && <ImageProject src={activeProject.capture5} alt={`${activeProject.title} Captura 5`} />}
        {activeProject.capture4 && <ImageProject src={activeProject.capture6} alt={`${activeProject.title} Captura 6`} />}
        {activeProject.capture4 && <ImageProject src={activeProject.capture7} alt={`${activeProject.title} Captura 7`} />}
      </div>
    </div>
  );
};

export default ProjectContain;