import Title from '../../components/layout/Title';
import { useI18n } from "../../context/I18nContext";
import { useState } from 'react';

const SimplePDFViewer = () => {
  const { t } = useI18n();
  const title = t("sections.pdf");
  
  // Construir la URL con parámetros para controlar el visor
  const pdfFilePath = "/pdf/CV.Ramiro.Urteaga.pdf";
  
  // Parámetros para controlar el visor de PDF
  const getPdfUrl = () => {
    const params = new URLSearchParams({
      // #toolbar=0 - Oculta completamente la barra de herramientas
      // #view=FitH - Ajusta al ancho
      // #navpanes=0 - Oculta el panel de navegación lateral
      scrollbar: 1
      // #statusbar=0 - Oculta la barra de estado inferior
      // #messages=0 - Oculta mensajes
      // #zoom=page-width - Nivel de zoom
    }).toString();
    
    return `${pdfFilePath}#toolbar=1&navpanes=0&scrollbar=0&statusbar=0&messages=0&view=FitH`;
  };

  return (
    <div className="pdf-container">
      <section className='pdf-section'>
        <Title title={title} />
        
        <div className="pdf-viewer-area">
          <div className="pdf-wrapper">
            <iframe 
              src={getPdfUrl()}
              title="CV Ramiro Urteaga"
              className="pdf-iframe"
              allow="fullscreen"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .pdf-container {
          width: 100%;
          max-width: 94%;
          margin: 0 auto;
          padding: 20px;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        .pdf-viewer-area {
          margin-top: 20px;
          border-radius: 12px;
        }
        
        .pdf-wrapper {
          position: relative;
          width: 100%;
          min-height: 600px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .pdf-iframe {
          width: 100%;
          height: 700px;
          border: none;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          background: white;
        }
        

        @media (max-width: 1768px) {
          .pdf-container {
            width: 100%;
            max-width: 100%;
            padding: 15px;
          }
          
          .pdf-iframe {
            width: 100%;
            height: 600px;
            margin: 0;
            padding: 0;
          }
        }
        
      `}</style>
    </div>
  );
};

export default SimplePDFViewer;