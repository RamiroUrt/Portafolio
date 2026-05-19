import { useTranslation } from 'react-i18next';
import Skeleton from 'react-loading-skeleton';
import type { BioTextProps } from '../../../assets/types/about.Types'

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
        <p className="text-about" dangerouslySetInnerHTML={{ __html: t('about.full_bio') }} />
    </div>
  );
};

export default BioText;