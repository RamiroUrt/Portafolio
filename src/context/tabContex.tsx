import { createContext, useContext, useState, type ReactNode } from 'react';

interface Tab {
  id: string;
  title: string;
type: 'section' | 'gallery'
  images?: string[]; 
}

interface TabContextType {
  tabs: Tab[];
  activeTabId: string;
  addTab: (tab: Tab) => void;
  setActiveTabId: (id: string) => void;
  closeTab: (id: string) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider = ({ children }: { children: ReactNode }) => {
const [tabs, setTabs] = useState<Tab[]>([
  { id: 'about', title: 'Sobre Mi', type: 'section' },
  { id: 'projects', title: 'Proyectos', type: 'section' }
]);
  const [activeTabId, setActiveTabId] = useState('');

  const addTab = (newTab: Tab) => {
    // Si la pestaña ya existe, solo la activamos
    if (tabs.find(t => t.id === newTab.id)) {
      setActiveTabId(newTab.id);
      return;
    }
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const closeTab = (id: string) => {
    const filteredTabs = tabs.filter(t => t.id !== id);
    setTabs(filteredTabs);
    if (activeTabId === id && filteredTabs.length > 0) {
      setActiveTabId(filteredTabs[filteredTabs.length - 1].id);
    }
  };

  return (
    <TabContext.Provider value={{ tabs, activeTabId, addTab, setActiveTabId, closeTab }}>
      {children}
    </TabContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("useTabs debe usarse dentro de un TabProvider");
  return context;
};