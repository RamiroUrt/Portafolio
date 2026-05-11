import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { type ItemHabProps } from "../../../assets/types/items.Types";

const ItemHabilities = ({ icon, tech, isLoading }: ItemHabProps) => {
  return (
    <div className="item-habilities flex flex-col items-center gap-2">
      <div className="icon-wrapper">
        {isLoading ? (
          <Skeleton circle height={40} width={40} />
        ) : (
          <span className="item-habilities-catel shrink-0 w-10 h-10 flex items-center justify-center text-center">
            {icon}
          </span>
        )}
      </div>

      <div className="text-wrapper text-center">
        {isLoading ? (
          <Skeleton width={50} height={12} />
        ) : (
          <span className="description-text font-medium text-sm">{tech}</span>
        )}
      </div>
    </div>
  );
}

export default ItemHabilities;