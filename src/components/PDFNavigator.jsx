

export default function PDFNavigation({ usePDFSlickStore }) {
  const {
    currentPageNumber,
    pageCount,
    isFirstPage,
    isLastPage,
    gotoNextPage,
    gotoPreviousPage,
  } = usePDFSlickStore();

  return (
    <div className="pdf-navigation">
      <button 
        onClick={gotoPreviousPage} 
        disabled={isFirstPage}
        className="nav-button"
      >
        Anterior
      </button>
      
      <span className="page-info">
        Página {currentPageNumber} de {pageCount}
      </span>
      
      <button 
        onClick={gotoNextPage} 
        disabled={isLastPage}
        className="nav-button"
      >
        Siguiente
      </button>

      <style jsx>{`
        .pdf-navigation {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 10px;
          border-radius: 8px;
        }
        .nav-button {
          padding: 5px 15px;
          background: ;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .nav-button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }
        .page-info {
          font-size: 14px;
          color: #333;
        }
      `}</style>
    </div>
  );
}