import PageLayout from '../../../components/layout/PageLayout/PageLayout'
import { useAnimateList } from '../../../hooks/useAnimate'
import AvatarAbout from '../../../components/ui/AboutSections/AvatarAbout'
import SignatureMate from '../../../components/ui/AboutSections/SignatureMate'
import BioText from '../../../components/ui/AboutSections/BioText'
import { useTranslation } from 'react-i18next'


const AboutMe = () => {
  const { t } = useTranslation();
  const { isLoading, containerRef } = useAnimateList('.avatar-wrapper, .about-text, .sing', {}, 600);

  return (
<PageLayout title={t('about.title')} isLoading={isLoading}>
      <div ref={containerRef}>
        <div className="flex justify-between items-center w-full wrapper-about">
          <AvatarAbout isLoading={isLoading} />
          <BioText isLoading={isLoading} />
        </div>
        <SignatureMate isLoading={isLoading} />
      </div>
    </PageLayout>
  )
}

export default AboutMe;