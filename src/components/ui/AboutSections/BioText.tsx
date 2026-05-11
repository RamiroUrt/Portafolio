import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';

interface BioTextProps {
  isLoading: boolean;
}

const BioText = ({ isLoading }: BioTextProps) => {

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="about-text" style={{ width: '100%' }}>
        <Skeleton count={8} height={20} className="mb-2" />
      </div>
    );
  }

return (
    <div className="about-text">
      <div style={{ width: '100%' }}>
        <p className="text-about" dangerouslySetInnerHTML={{ __html: t('about.full_bio') }} />
      </div>
    </div>
  );
};

export default BioText;