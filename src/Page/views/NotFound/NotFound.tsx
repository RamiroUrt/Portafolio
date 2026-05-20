import { useState } from 'react';
import PageLayout from '../../../components/layout/PageLayout/PageLayout';
import SecretView from '../Secret/SecretView';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  
  const { t } = useTranslation(); 
  const [showSecret, setShowSecret] = useState(false);

  return (
    <PageLayout title={showSecret ? t('notFound.secretTitle') : '404'} isLoading={false}>
      <div style={{ padding: '40px 0' }}>
        
        {!showSecret ? (
          /* VISTA DEL JUEGO */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<p className="description-text" style={{ marginBottom: '20px' }}>
      {t('notFound.dinoMessage')}
    </p>
            <div style={{ width: '100%', maxWidth: '800px', height: '400px', overflow: 'hidden', borderRadius: '12px' }}>
              <iframe 
                src="https://chromedino.com/"
                title="Dino Game"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"

              />
            </div>
          </div>
        ) : (

          <SecretView />
        )}


        <div className="flex justify-center gap-4 mt-10">
          <button 
            className="description-text cursor-pointer"
            style={{ opacity: 0.6, fontSize: '0.9rem', textDecoration: 'underline' }}
            onClick={() => setShowSecret(!showSecret)}
          >
{showSecret ? t('notFound.backToGame') : t('notFound.advancedOptions')}          </button>
          
          <button 
            className="description-text cursor-pointer"
            style={{ fontWeight: 'bold' }}
            onClick={() => window.location.href = '/'}
          >
{t('notFound.goHome')}
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;