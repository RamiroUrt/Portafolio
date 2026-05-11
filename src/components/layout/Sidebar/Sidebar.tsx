import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useSidebar } from '../../../hooks/useSidebar';
import { SidebarFooter } from './SidebarFooter';
import { SidebarUser } from './SidebarUser';
import Logo from '../../../assets/images/RU_Amarillo.webp';
import SocialBtn from "../../ui/Buttons/SocialBtn";
import { LinkedinIcon } from "../../../assets/icons/Svg/LinkedinIcon";
import GithubIcon from "../../../assets/icons/Svg/GithubIcon";
import DownloadBtn from "../../ui/Buttons/DownloadBtn";
import DownloadIcon from '../../../assets/icons/Svg/DownloadIcon';
import { SOCIAL_LINKS } from '../../../assets/constant/socialProfileLink';
import { useTranslation } from 'react-i18next';

const Aside = () => {
  const { isLoading, contentRef } = useSidebar();

const { t } = useTranslation();

  return (
    <aside className="sidebar">
      <section className="sidebar-content" ref={contentRef}>
        <SkeletonTheme baseColor="#B8B8B8" highlightColor="#e5e7eb">
          
          <div className="sidebar-header">
            <div className="circle">
              {isLoading ? (
                <Skeleton width={150} height={150} borderRadius={10} />
              ) : (
                <img src={Logo} alt="Logo" />
              )}
            </div>
          </div>

          <div className="sidebar-body">

            <SidebarUser isLoading={isLoading} />

            <div className="sidebar-socialInfo">
              {isLoading ? (
                <div className="flex gap-2">
                  <Skeleton circle width={60} height={60} />
                  <Skeleton circle width={60} height={60} />
                </div>
              ) : (
                <div className="buttons-contain">
                  <SocialBtn 
                  icon={<LinkedinIcon />} 
                  isLoading={isLoading}
                  href={SOCIAL_LINKS.linkedin} />
                  <SocialBtn 
                  icon={<GithubIcon />}
                  isLoading={isLoading}
                  href={SOCIAL_LINKS.github} />
                </div>
              )}
            </div>
          </div>

          <div className="sidebar-download">
            {isLoading ? (
              <Skeleton height={45} borderRadius={8} />
            ) : (
              <DownloadBtn icon={<DownloadIcon />}
              text={t('sidebar.download_cv')} />
            )}
          </div>


          <div className="sidebar-footer">
            <div className="footer-content">
              {isLoading ? (
                <div className="w-full flex flex-col gap-4 items-center">
                  <Skeleton width={100} height={25} borderRadius={20} />
                  <Skeleton width={100} height={25} borderRadius={20} />
                </div>
              ) : (
                <SidebarFooter />
              )}
            </div>
          </div>

          <p className="sub_overline">®2026 Ramiro Urteaga</p>
        </SkeletonTheme>
      </section>
    </aside>
  );
};

export default Aside;