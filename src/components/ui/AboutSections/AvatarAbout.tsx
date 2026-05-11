import Skeleton from 'react-loading-skeleton'
import Avatar from '../../../assets/icons/images/AvatarIA2.webp'

interface AvatarAboutProps {
  isLoading: boolean;
}

const AvatarAbout = ({ isLoading }: AvatarAboutProps) => {
  return (
    <div className="avatar-wrapper">
      <div className="circle-avatar">
        {isLoading ? (
          <Skeleton circle height="100%" width="100%" containerClassName="avatar-skeleton" />
        ) : (
          <>
            <img src={Avatar} alt="Ramiro Urteaga - Frontend Dev" />
            <div className="badge-job">
              <i></i>
              <span className='text-badge'>Disponible para trabajar</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AvatarAbout;