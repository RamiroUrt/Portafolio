/* eslint-disable react/no-unescaped-entities */
import CardCont from "../components/CardCont";
import CardJr from "../components/CardJr";
import { GraduationCap, BicepsFlexed } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about" id="about">
        <p className="section_text_p text-center dark:-text--light-white">{t('about.getToKnow')}</p>
        <h1 className="title dark:-text--font-light">{t('about.aboutMe')}</h1>
        <div className="about_container">
          <div className="card-junior">
            <CardJr />
          </div>
          <div className="section_container">
            <CardCont
              title={t('about.education.title')}
              description={t('about.education.description')}
              details={t('about.education.details')}
              Icon={GraduationCap}
            />
            <CardCont
              title={t('about.experience.title')}
              description={t('about.experience.description')}
              details={t('about.experience.details')}
              Icon={BicepsFlexed}
            />
          </div>
          <div className="text_content text_p_About">
            <p className="dark:text-light-white p-about" dangerouslySetInnerHTML={{ __html: t('about.textContent') }}></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
