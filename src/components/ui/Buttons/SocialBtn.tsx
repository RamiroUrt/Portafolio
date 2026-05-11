import Skeleton from 'react-loading-skeleton';
import { type SocialBtnProps } from "../../../assets/types/buttons.Types";

const SocialBtn = ({ icon, isLoading, href }: SocialBtnProps) => {
  return (
    <div className="social-container">
      {isLoading ? (
        <Skeleton circle width={40} height={40} />
      ) : (
        <a 
          href={href} 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 flex items-center justify-center text-amber-500 transition-colors duration-300 hover:text-[#eeebe4] cursor-pointer hover:bg-amber-500 rounded-[10px] p-2.5"
        >
          {icon}
        </a>
      )}
    </div>
  );
};

export default SocialBtn;