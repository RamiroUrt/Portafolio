import PageLayout from "../../../components/layout/PageLayout/PageLayout";
import Skeleton from "react-loading-skeleton";
import { useAnimateList } from '../../../hooks/useAnimate'
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { isLoading, containerRef } = useAnimateList('.pdf-wrapper', {}, 800);
  const pdfFilePath = "/pdf/CV.Ramiro.Urteaga.pdf";
const { t } = useTranslation();
  return (
<PageLayout title={t('resume.title')} isLoading={isLoading}>
      <div className="layout-body-resume" ref={containerRef}>
        {isLoading ? (
          <Skeleton height="80vh" borderRadius="10px" />
        ) : (
          <div className="pdf-wrapper" style={{ width: '100%', marginTop: '3em' }}>
            <iframe 
              src={`${pdfFilePath}#toolbar=1`}
              title="CV Ramiro Urteaga"
              className="w-full h-screen rounded-lg shadow-xl border-none"
              allow="fullscreen"
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Resume;