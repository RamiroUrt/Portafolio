import Skeleton from 'react-loading-skeleton'
import { useTranslation } from 'react-i18next'
import Avatar from '../../../assets/icons/images/AvatarIA2.webp'
import type { AvatarAboutProps } from '../../../assets/types/about.Types'

const AvatarAbout = ({ isLoading }: AvatarAboutProps) => {
  const { t } = useTranslation()

  return (
    <div className="avatar-wrapper">
      <div className="circle-avatar">
        {isLoading ? (
          <Skeleton 
            circle 
            height="100%" 
            width="100%" 
            containerClassName="avatar-skeleton" 
          />
        ) : (
          <>
            <img src={Avatar} alt="Ramiro Urteaga - Frontend Dev" />
            <div className="badge-job">
              <i className="status-dot"></i>
              <span className='text-badge'>{t('about.status_badge')}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AvatarAbout;