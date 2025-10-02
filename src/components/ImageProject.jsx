import React, { useState, useEffect } from 'react';
import LoaderIos from './LoaderIos/LoaderIos';

const ImageProject = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  // Resetear estado cuando cambia la imagen
  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div className='image-project-container'>
      {!loaded && (
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className='image-project-container'
        >
          <LoaderIos />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out"
        }}
      />
    </div>
  );
};

export default ImageProject;
