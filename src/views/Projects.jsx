import CardProjects from "../components/CardProjects";

import { useTranslation } from 'react-i18next';

import {projectData} from "../assets/constant/projectData"

import { useEffect } from 'react';

import Auris from "../components/Auris";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Projects = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);

  return (
    <>
    <section id='projects' className="projects relative">
      <p data-cursor="text" className="section_text_p text-center dark:-text--light-white">{t('projects.browseMyRecent')}</p>
      <h1 data-cursor="text" className="title dark:-text--light-white">{t('projects.title')}</h1>
      <div className="color-container flex flex-wrap">
        <div className="container_project relative ">
    <div className="auris-contain">
      <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
       className="auris-background">
        <Auris/>
      </div>
    </div>
    {projectData.map((project, index) => (
        <CardProjects
          key={index}
          img={project.img}
          alt={t(project.alt)}
          title={t(project.title)}
          description={t(project.descriptionKey)}
          location={project.location}
          locations={project.locations}
          technologies={project.technologies}
        />
      ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Projects;

