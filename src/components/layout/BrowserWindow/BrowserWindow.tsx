import { useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigation } from "../../../hooks/useNavigaiton";
import { useTabOrder } from "../../../hooks/useTabOrder";
import TAB_COMPONENTS from "../../../assets/constant/tabs";
import BrowserHeader from "./BrowserHeader";
import MobileTabsOverlay from "./MobileTabOverlay";
import GalleryView from "../GaleryView/GalleryView";
import Projects from "../../../Page/views/Projects/Projects";
import 'react-loading-skeleton/dist/skeleton.css';

const BrowserWindow = () => {
  const { active, isLoading, refreshKey, tabs: initialTabs, handleRefresh, handleTabClick } = useNavigation();
  const { tabs, moveTab, navigateLineally, handleUrlNavigation, openTab, closeTab } = useTabOrder(initialTabs, active, handleTabClick);
  const [showTabsOverlay, setShowTabsOverlay] = useState(false);

  const SelectedComponent = TAB_COMPONENTS[active as keyof typeof TAB_COMPONENTS];

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
          handleUrlNavigation={handleUrlNavigation}
          handleNewTab={() => openTab('404')}
          onCloseTab={closeTab}
          showTabsOverlay={showTabsOverlay}
          onToggleTabsOverlay={() => setShowTabsOverlay(v => !v)}
        />

        <section className="window-content">
          {active === 'projects' ? (
            <Projects handleOpenScreens={(name) => openTab(`Screens: ${name}`)} />
          ) : SelectedComponent ? (
            <SelectedComponent key={`${active}-${refreshKey}`} handleOpenScreens={(name) => openTab(`Screens: ${name}`)} />
          ) : (
            <GalleryView activeId={active} key={`${active}-${refreshKey}`} />
          )}
        </section>

        {showTabsOverlay && (
          <MobileTabsOverlay
            tabs={tabs}
            active={active}
            onSelectTab={(tabId) => { handleTabClick(tabId); setShowTabsOverlay(false); }}
            onCloseTab={closeTab}
            onNewTab={() => { openTab('404'); setShowTabsOverlay(false); }}
            onClose={() => setShowTabsOverlay(false)}
          />
        )}
      </main>
    </SkeletonTheme>
  );
};

export default BrowserWindow;