import { useState, useEffect } from "react";
import "./BallLoader.css"; // Importa el archivo CSS con la animación

// eslint-disable-next-line react/prop-types
const BallLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      {isLoading && (
        <div className={`loader-ball ${isLoading ? "animate" : ""}`} />
      )}
      <div className={`loader-content ${showContent ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default BallLoader;
