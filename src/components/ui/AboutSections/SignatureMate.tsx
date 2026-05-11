import Skeleton from 'react-loading-skeleton'
import MateIcon from "../../../assets/icons/Svg/MateIcon"
import { useTranslation } from 'react-i18next';

const SignatureMate = ({ isLoading }: { isLoading: boolean }) => {

const { t } = useTranslation();

  if (isLoading) {
    return <div style={{ width: '100%' }}><Skeleton height={100} borderRadius={10} /></div>
  }

  return (
    <div className="sing">
      <span className="shrink-0 w-30 h-30 flex items-center justify-center">
        <MateIcon />
      </span>
      <p className="sing-text">
      <span dangerouslySetInnerHTML={{ __html: t('about.mate_signature') }} />
      </p>
    </div>
  )
}

export default SignatureMate;