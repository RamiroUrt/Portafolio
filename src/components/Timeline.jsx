import './layout/styles/Timeline.css';

const Timeline = ({ items, isEducation = false }) => {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          {/* Bullet con icono */}
          <span className="timeline-bullet">
            <svg 
              className={`timeline-icon ${isEducation ? 'icon-education' : ''}`} 
              viewBox="0 0 20 20"
            >
              <path d={item.iconPath} />
            </svg>
          </span>

          {/* Contenido principal */}
          <div className="timeline-content">
            {/* Título y badge */}
            <h3 className="timeline-title">
              <span className="timeline-badge title">{item.badge}</span>
              {item.title}
            </h3>

            {/* Fecha */}
            <time className="timeline-date text-subtitle">{item.date}</time>

            {/* Descripción */}
            <p className="timeline-description text-secondary">{item.description}</p>

            {/* Botón condicional */}
            {item.button && (
              <a
                href={item.button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-button download-contain"
              >
                <svg 
                  className={`timeline-button-icon ${isEducation ? 'icon-button-education' : ''}`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {item.button.iconPaths.map((path, index) => (
                    <path key={index} d={path} />
                  ))}
                </svg>
                {item.button.text}
              </a>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;