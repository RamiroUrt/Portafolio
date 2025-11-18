import React, { useState } from 'react';
import ReactGlider from '../../components/ReactGlider';
import Title from '../../components/layout/Title';
import ProjectContain from '../../components/ProjectContain';
import Choose from '../../components/Choose';
import { useI18n } from '../../context/I18nContext';


const Project = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const { t } = useI18n();
  return (
    <section className='project layout-main'>
      <Title title={t("sections.projects")} />
      <div className="project-slider-container">
        <ReactGlider onSlideChange={handleSlideChange}  />
      </div>
      
      {activeIndex !== null ? (
        <ProjectContain activeIndex={activeIndex} />
      ) : (
        <>
        <Choose onSelectProject={() => setActiveIndex(0)} />
      </>
      )}
    </section>
  );
};

export default Project;