import { usePDFSlick } from "@pdfslick/react";
import "@pdfslick/react/dist/pdf_viewer.css";
import Title from '../../components/layout/Title';
import { useI18n } from "../../context/I18nContext";

const PDFViewer = () => {
  const { t } = useI18n();
  const title = t("sections.pdf");

  const pdfFilePath = "/pdf/CV.Ramiro.Urteaga.pdf"; 
  
  const { viewerRef, usePDFSlickStore, PDFSlickViewer } = usePDFSlick(
    pdfFilePath,
    {
      singlePageViewer: false,
      scaleValue: "page-fit",
      scrollMode: "vertical",
      scrollModeOptions: { wheel: true },
      pageMode: "single",
      pageModeOptions: { scrollMode: "horizontal" },
      defaultPageNumber: 1,
    }
  );

  return (
    <>

    <div className="pdf-viewer-container">
      <section className='pdf-section'>
        <Title title={title} />
        
        <div className="pdf-content">
          <div className="pdf-viewer-wrapper">
            <PDFSlickViewer 
            className="pdf-viewer"
            zoom={true}
              viewerRef={viewerRef} 
              usePDFSlickStore={usePDFSlickStore} 
            />
          </div>
          
        </div>
      </section>

      {/* Estilos */}
      <style jsx>{`
        .pdf-viewer-container {
          width: 90%;
          height: 100vh;
          padding: 20px;
          overflow: hidden;
          box-sizing: border-box;
        }
        
        .pdf-content {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          overflow: hidden;
          height: calc(100vh - 100px);

        }
        
        .pdf-viewer-wrapper {
          flex: 1;
          width: 100%;
          height: 100%;
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        overflow: hidden;
        }
        
        .pdf-controls {
          margin-top: 15px;
          display: flex;
          justify-content: center;
        }
        .pdf-viewer-wrapper :global(.pdfSlickViewer) {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
</>
  );
};
export default PDFViewer;