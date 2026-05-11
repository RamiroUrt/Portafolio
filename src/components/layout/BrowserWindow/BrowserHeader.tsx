import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SortableTab from './SortableTab';
import NavButtons from '../../ui/NavButtons/NavButtons';
import AddressBar from '../../ui/NavButtons/AddresBar';
import WindowControlsRight from '../../ui/NavButtons/WindowsControlsRight';
import TrafficLights from '../../ui/NavButtons/TraficLights';

interface BrowserHeaderProps {
  tabs: string[];
  active: string;
  isLoading: boolean;
  handleRefresh: () => void;
  handleTabClick: (tab: string) => void;
  moveTab: (dragIndex: number, hoverIndex: number) => void;
  navigateLineally: (direction: 'forward' | 'back') => void;
}

const BrowserHeader = ({ 
  tabs, active, isLoading, handleRefresh, handleTabClick, moveTab, navigateLineally 
}: BrowserHeaderProps) => {
  return (
    <header className="browseWindows-header">
      <div className="toolbar">
        <TrafficLights />
        <NavButtons 
          goBack={() => navigateLineally('back')} 
          goForward={() => navigateLineally('forward')} 
          handleRefresh={handleRefresh} 
        />
        <AddressBar isLoading={isLoading} active={active}  />
        <WindowControlsRight />
      </div>

      <DndProvider backend={HTML5Backend}>
        <nav className="tabs-bar">
          {tabs.map((tab, index) => (
            <SortableTab
              key={tab}
              tab={tab}
              index={index}
              isActive={active === tab}
              onClick={handleTabClick}
              moveTab={moveTab}
            />
          ))}
          {!isLoading && <button className="new-tab-btn">+</button>}
        </nav>
      </DndProvider>
    </header>
  );
};

export default BrowserHeader;