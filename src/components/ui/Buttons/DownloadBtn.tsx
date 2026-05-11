import { type DownloadBtnProps } from "../../../assets/types/buttons.Types";

const DownloadBtn = ({ text, icon }: DownloadBtnProps) => {
  const pdfPath = "/pdf/CV.Ramiro.Urteaga.pdf"; 

  return (
    <a 
      href={pdfPath} 
      download="CV_Ramiro_Urteaga.pdf" 
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