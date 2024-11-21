import ArticleExpFront from "../components/ArticleExpFront";
import { useTranslation } from 'react-i18next';
import Mate from '../components/Mate';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration: 900,
});

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="experience mt-[15rem]" id="experience">
        <p className="section_text_p text-center dark:-text--light-white">{t('experience.exploreMy')}</p>
        <h1 className="title dark:-text--light-white">{t('experience.title')}</h1>
        
        <div className="experience_details_container">
          <div className="about_details">
            <div className="details_container_skills">
              <h2 className="experience_sub_title dark:-text--light-white">{t('experience.frontend.title')}</h2>
        <div className="contain-mate ">
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="mate-background"
          >
            <Mate />
          </div>
        </div>
              
              <div className="article-container">
                <ArticleExpFront />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
