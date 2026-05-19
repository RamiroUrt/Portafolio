import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableTab from './SortableTab';
import NavButtons from '../../ui/NavButtons/NavButtons';
import AddressBar from '../../ui/NavButtons/AddresBar';
import WindowControlsRight from '../../ui/NavButtons/WindowsControlsRight';
import TrafficLights from '../../ui/NavButtons/TraficLights';
import type { BrowserHeaderProps } from '../../../assets/types/navButtons.Types';

const BrowserHeader = ({
  tabs,
  active,
  isLoading,
  handleRefresh,
  handleTabClick,
  moveTab,
  navigateLineally,
  handleUrlNavigation,
  handleNewTab,
  onCloseTab,
  showTabsOverlay,
  onToggleTabsOverlay,
}: BrowserHeaderProps) => {
  return (
    <header className="browseWindows-header">

      {/* ── DESKTOP ── */}
      <div className="toolbar desktop-only">
        <TrafficLights />
        <NavButtons
          goBack={() => navigateLineally('back')}
          goForward={() => navigateLineally('forward')}
          handleRefresh={handleRefresh}
        />
        <AddressBar isLoading={isLoading} active={active} onNavigate={handleUrlNavigation} />
        <WindowControlsRight />
      </div>

      <DndProvider backend={HTML5Backend}>
        <nav className="tabs-bar desktop-only">
          {tabs.map((tabId, index) => (
            <SortableTab
              key={tabId}
              tab={tabId}
              index={index}
              isActive={active === tabId}
              onClick={handleTabClick}
              moveTab={moveTab}
              onClose={onCloseTab}
            />
          ))}
          {!isLoading && (
            <button className="new-tab-btn" onClick={handleNewTab}>+</button>
          )}
        </nav>
      </DndProvider>

      {/* ── MOBILE ── */}
      <div className="mobile-toolbar-bar mobile-only">
        <button className="nav-btn" onClick={() => navigateLineally('back')}>‹</button>
        <button className="nav-btn" onClick={() => navigateLineally('forward')}>›</button>
        <AddressBar isLoading={isLoading} active={active} onNavigate={handleUrlNavigation} />
        <button
          className={`tab-count-btn ${showTabsOverlay ? 'active' : ''}`}
          onClick={onToggleTabsOverlay}
        >
          {tabs.length}
        </button>
        <button className="nav-btn" onClick={handleRefresh}>↻</button>
      </div>

    </header>
  );
};

export default BrowserHeader;