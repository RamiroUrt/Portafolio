import { useTranslation } from 'react-i18next';
import { SidebarFooter } from '../Sidebar/SidebarFooter';

interface MobileTabsOverlayProps {
  tabs: string[];
  active: string;
  onSelectTab: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
  onNewTab: () => void;
  onClose: () => void;
}

const MobileTabsOverlay = ({ 
  tabs, 
  active, 
  onSelectTab, 
  onCloseTab, 
  onNewTab, 
  onClose 
}: MobileTabsOverlayProps) => {
  const { t } = useTranslation();

  return (
    <div className="mobile-tabs-backdrop" onClick={onClose}>
      <div
        className="mobile-tabs-panel"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="mobile-tabs-panel-header">
          <span>{tabs.length} {tabs.length === 1 ? 'pestaña' : 'pestañas'}</span>
          <button className="done-btn" onClick={onClose}>Listo</button>
        </div>


        <div className="mobile-tabs-grid">
          {tabs.map((tabId: string) => ( 
            <div
              key={tabId}
              className={`mobile-tab-card ${active === tabId ? 'is-active' : ''}`}
              onClick={() => onSelectTab(tabId)}
            >
              <div className="mobile-tab-card-bar">
                <span className="mobile-tab-card-title">
                  {tabId.startsWith('Screens: ') 
                    ? tabId.replace('Screens: ', '') 
                    : t(`nav.tabs.${tabId}`, { defaultValue: tabId })
                  }
                </span>
                

                {tabId.startsWith('Screens: ') && (
                  <span
                    role="button"
                    tabIndex={0}
                    className="mobile-tab-close"
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      onCloseTab(tabId); 
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && onCloseTab(tabId)}
                  >
                    ×
                  </span>
                )}
              </div>
              <div className="mobile-tab-preview" />
            </div>
          ))}
          
          <button className="mobile-new-tab-card" onClick={onNewTab}></button>
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
};

export default MobileTabsOverlay;