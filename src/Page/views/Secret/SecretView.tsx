
import Skeleton from 'react-loading-skeleton';
import { useAnimateList } from '../../../hooks/useAnimate';

import FotoPerro from '../../../assets/icons/images/Simmon.webp'; 
import { Trans, useTranslation } from 'react-i18next';

const SecretView = () => {
  const { t } = useTranslation();
  // Reutilizamos tu hook de animación para que los elementos entren con estilo
  const { isLoading, containerRef } = useAnimateList('.avatar-wrapper, .about-text', {}, 600);

  return (
    <div ref={containerRef}>
      <div className="flex justify-between items-center w-full wrapper-about">
        
        {/* Lado Izquierdo: El "Avatar" de tu perro */}
        <div className="avatar-wrapper">
          <div className="circle-avatar">
            {isLoading ? (
              <Skeleton circle height="100%" width="100%" containerClassName="avatar-skeleton" />
            ) : (
              <>
                <img src={FotoPerro} alt="Guardián del 404" />
              </>
            )}
          </div>
        </div>

        {/* Lado Derecho: El Texto de "Bio" */}
        <div className="about-text">
          <div style={{ width: '100%' }}>
            {isLoading ? (
              <Skeleton count={5} height={20} className="mb-2" />
            ) : (
              <p className="text-about">
               {t('notFound.simonBio.p1')}
  <br /><br />
  <Trans i18nKey="notFound.simonBio.p2">
    Mientras Ramiro arregla este enlace (o me lanza la pelota), podrías considerar darle un trabajo. Él es un genio con <strong>React y TypeScript</strong>, y yo soy un experto en asegurarme de que no se mueva de la silla hasta que termine el código. ¡Es un equipo ganador!
  </Trans>
  <br /><br />
  <Trans i18nKey="notFound.simonBio.p3">
    Dice Ramiro que es <strong>desarrollador Frontend</strong>, pero yo solo veo luces de colores en el monitor mientras duermo a sus pies. Contrátalo para que pueda seguir comprándome esos premios caros que tanto me gustan. Prometo no ladrar en las reuniones de Zoom.
  </Trans>
  <br/><br />
  <Trans i18nKey="notFound.simonBio.p4">
    Diseñado y codeado desde cero con mucho cariño por Ramiro. Código optimizado a base de mate; UI testeada y aprobada por Simon💛
  </Trans>
    <br/><br />
  <b>{t('notFound.simonBio.alias')}</b> <span className="highlight"> r.urteaga</span>
  </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecretView;