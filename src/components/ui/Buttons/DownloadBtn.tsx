import { type DownloadBtnProps } from "../../../assets/types/buttons.Types";
import { useTranslation } from "react-i18next";

const DownloadBtn = ({ text, icon }: DownloadBtnProps) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language?.startsWith('en');
  const pdfPath = isEnglish ? "/pdf/English_CV_Ramiro_Urteaga_Full_Stack.pdf" : "/pdf/CV.Ramiro.Urteaga.pdf";
  const fileName = isEnglish ? "CV_Ramiro_Urteaga_EN.pdf" : "CV_Ramiro_Urteaga.pdf";

  return (
    <a 
      href={pdfPath} 
      download={fileName} 
      className="download flex items-center justify-between w-full decoration-none group"
    >
      <span className="subtitle">{text}</span>
      <i className="shrink-0 w-10 h-10 flex items-center justify-center">
        {icon}
      </i>
    </a>
  );
};

export default DownloadBtn;