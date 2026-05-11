import { useState, useCallback, useEffect } from 'react';

export const useTabOrder = (initialTabs: string[], active: string, handleTabClick: (tab: string) => void) => {
  const [tabs, setTabs] = useState(initialTabs);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTabs(initialTabs);
  }, [initialTabs]);

  const moveTab = useCallback((dragIndex: number, hoverIndex: number) => {
    setTabs((prevTabs) => {
      const newTabs = [...prevTabs];
      const [draggedTab] = newTabs.splice(dragIndex, 1);
      newTabs.splice(hoverIndex, 0, draggedTab);
      return newTabs;
    });
  }, []);

  const navigateLineally = useCallback((direction: 'forward' | 'back') => {
    const currentIndex = tabs.indexOf(active);
    if (direction === 'forward' && currentIndex < tabs.length - 1) {
      handleTabClick(tabs[currentIndex + 1]);
    } else if (direction === 'back' && currentIndex > 0) {
      handleTabClick(tabs[currentIndex - 1]);
    }
  }, [tabs, active, handleTabClick]);

const handleUrlNavigation = useCallback((inputPath: string) => {
    const cleanPath = inputPath.trim().toLowerCase();
    const match = tabs.find(t => t.toLowerCase() === cleanPath);
    
    if (match) {
      handleTabClick(match);
    } else {
      // Opcional: Podés resetear el valor para que no quede la URL "rota"
      handleTabClick(active); 
      console.warn("404: Path not found");
    }
  }, [tabs, handleTabClick, active]);

  return { tabs, moveTab, navigateLineally, handleUrlNavigation, setTabs };
};
