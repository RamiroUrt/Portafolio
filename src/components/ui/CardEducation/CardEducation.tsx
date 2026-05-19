import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DateIcon from "../../../assets/icons/Svg/DateIcon"

import { type CardEducationProps } from "../../../assets/types/cards.Types"
import { useTranslation } from 'react-i18next'

const CardEducation = ({ title, subtitle, date, description, icon, isLoading, link }: CardEducationProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="contain-card-education">
      
      <div className="main-card-header">
        <div className="flex items-center justify-start gap-2.5">
          <span className="icon-cap icon-dark shrink-0 w-10 h-10 flex items-center justify-center">
            {isLoading ? <Skeleton circle height={50} width={50} /> : icon}
          </span>
          <div className="flex items-start justify-center flex-col leading-none">
            {isLoading ? (
              <>
                <Skeleton width={120} height={18} />
                <Skeleton width={150} height={14} style={{ marginTop: '4px' }} />
              </>
            ) : (
              <>
                <h1 className="role-title font-bold text-gray-800">{title}</h1>
                <p className="company-name text-[#f59e0a]">{subtitle}</p>
              </>
            )}
          </div>
        </div>
      </div>

      <span className="date-text-education date-font mt-4 flex items-center text-sm text-gray-500">
        <i className="icons-muted shrink-0 w-5 h-5 flex items-center justify-center">
          {isLoading ? <Skeleton circle height={18} width={18} /> : <DateIcon />}
        </i>
        <div className="">
          {isLoading ? <Skeleton width={80} /> : <p className='date-text'>{date}</p>}
        </div>
      </span>

      {(description || isLoading) && (
        <div className="main-card-description mt-2 text-gray-600 text-sm leading-relaxed">
          {isLoading ? <Skeleton count={2} /> : <p className='description-text '>{description}</p>}
        </div>
      )}


      {!isLoading && link && (
        <div className="w-full"> 
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="download"
          >
            <span>{t('education.view_certificate')}</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default CardEducation