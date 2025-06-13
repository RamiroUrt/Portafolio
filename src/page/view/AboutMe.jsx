import React from 'react'
import Avatar from '../../assets/img/AvatarIA2.webp'
import Title from '../../components/layout/Title';
import { useI18n } from '../../context/I18nContext';


const AboutMe = () => {
  const { t } = useI18n();
  return (
    <section className='about layout-main'>
        <Title title={t("sections.about_me")} />
      <div className="main-about">
        <div className="picture">
          <img src={Avatar} alt="Profile Ramiro Urteaga" title='Ramiro Urteaga' className="profile-img" loading='lazy' />
        </div>
        <div className="text-main-about">
        <p 
            className="text-secondary text-main" 
            dangerouslySetInnerHTML={{ __html: t("about.text") }}>
        </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
