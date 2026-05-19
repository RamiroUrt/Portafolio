import Skeleton from "react-loading-skeleton";
import type { BadgeProps } from "../../assets/types/badge.Types";

const Badge = ({ text, isLoading }: BadgeProps) => {
  return (
    <>
      {isLoading ? (
        <Skeleton 
          width={90} 
          height={25} 
          borderRadius={15} 
          className="opacity-50" 
        />
      ) : (
        <span className="tag-information">
          <i></i>
          {text}
        </span>
      )}
    </>
  );
}

export default Badge;