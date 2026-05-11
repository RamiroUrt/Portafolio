import Skeleton from 'react-loading-skeleton';
import Title from "../../ui/Title/Title";
import SubTitle from "../../ui/Title/Subtitle";
import Info from "../../ui/Info/Info";

interface SidebarUserProps {
  isLoading: boolean;
}

export const SidebarUser = ({ isLoading }: SidebarUserProps) => {

  return (
    <div className="user-info">
      {isLoading ? (
        <>
          <Skeleton width={290} height={30} borderRadius={10} style={{ marginBottom: '8px' }} />
          <Skeleton width={190} height={30} borderRadius={10} />
        </>
      ) : (
        <>
          <Title text="Ramiro Urteaga"/>
          <SubTitle text="Frontend Dev" />
        </>
      )}
      
      <section className="info-content">
        {isLoading ? (
          <Skeleton width={290} height={130} borderRadius={10} />
        ) : (
          <Info />
        )}
      </section>
    </div>
  );
};