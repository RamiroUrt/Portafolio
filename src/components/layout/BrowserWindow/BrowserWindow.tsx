import { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigation } from "../../../hooks/useNavigaiton";
import { useTabOrder } from "../../../hooks/useTabOrder";
import TAB_COMPONENTS from "../../../assets/constant/tabs";
import BrowserHeader from "./BrowserHeader"; 
import 'react-loading-skeleton/dist/skeleton.css';
import '../../../styles/fonts.css';

const BrowserWindow = () => {
  const { 
    active, isLoading, refreshKey, tabs: initialTabs, 
    handleRefresh, handleTabClick 
  } = useNavigation();

  // Desestructuramos handleUrlNavigation para usarla en el Header
  const { 
    tabs, 
    moveTab, 
    navigateLineally, 
  } = useTabOrder(initialTabs, active, handleTabClick);

  const ActiveComponent = TAB_COMPONENTS[active];

  return (
    <SkeletonTheme baseColor="#B8B8B8" highlightColor="#e5e7eb">
      <main className="browseWindows">
        <BrowserHeader 
          tabs={tabs}
          active={active}
          isLoading={isLoading}
          handleRefresh={handleRefresh}
          handleTabClick={handleTabClick}
          moveTab={moveTab}
          navigateLineally={navigateLineally}
        />
        <section className="window-content">
          {/* La key asegura que el componente se re-monte al navegar o refrescar */}
          <ActiveComponent key={`${active}-${refreshKey}`} />
        </section>
      </main>
    </SkeletonTheme>
  );
};

export default BrowserWindow;