import Timeline from "../../components/Timeline";
import Title from "../../components/layout/Title";
import { useI18n } from "../../context/I18nContext";

import educationDataEn from "../../assets/json/locale/EducationDataEN";
import educationDataEs from "../../assets/json/locale/EducationDataES";
const Education = () => {
  const { t, locale } = useI18n();
  console.log("LANGUAGE:", locale);

  const educationData =
    locale === "es" ?  educationDataEs : educationDataEn;
  return (
    <section className="education layout-main">
      <Title title={t("sections.education")} />
      <div className="education-container">
        <div className="education-timeline-contain">
          <Timeline items={educationData} isEducation />
        </div>
      </div>
    </section>
  );
};

export default Education;
