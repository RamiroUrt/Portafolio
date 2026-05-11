import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { TitleWithIconProps } from "../../../assets/types/titles.Types";
import '../../../styles/fonts.css';

const TitleWithIcon = ({ text, icon, isLoading }: TitleWithIconProps) => {
  return (
    <div className="title-with-icon flex items-center justify-center gap-2.5">
      {(isLoading || icon) && (
        <span className='icon-title icon shrink-0 w-10 h-10 flex items-center justify-center'>
          {isLoading ? <Skeleton circle height={40} width={40} /> : icon}
        </span>
      )}
      
      {isLoading ? (
        <Skeleton width={200} height={20} />
      ) : (
        <h1 className="text-xl font-bold">{text}</h1>
      )}
    </div>
  );
};

export default TitleWithIcon;