import { projectsData } from '../../../assets/constant/projects';
import PageLayout from '../PageLayout/PageLayout';

interface GalleryViewProps {
  activeId: string;
}

const GalleryView = ({ activeId }: GalleryViewProps) => {

  const projectName = activeId.replace('Screens: ', '');


  const project = projectsData.find(p => p.title === projectName);

  if (!project || project.screenshotCount === 0) {
    return (
      <div className="gallery-empty">
        <p>No hay capturas disponibles para {projectName}</p>
      </div>
    );
  }

  const screenshots = Array.from({ length: project.screenshotCount }, (_, i) => i + 1);

  return (
  <PageLayout title={project.title}>
      
      <div className="gallery-grid">
        {screenshots.map((num) => (
          <div key={num} className="gallery-item">
            <img 
src={`/screen/${project.folderName}/${num}.webp`}
              alt={`${project.title} screenshot ${num}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default GalleryView;