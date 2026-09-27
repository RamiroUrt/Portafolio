import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import type { TitleWithIconProps } from "../../../assets/types/titles.Types";

const TitleWithIcon = ({ text, icon, isLoading, as: Heading = 'h3' }: TitleWithIconProps) => {
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
        <Heading className="font-bold text-whit-icon">{text}</Heading>
      )}
    </div>
  );
};

export default TitleWithIcon;