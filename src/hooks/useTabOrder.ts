import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useTabOrder = (initialTabs: string[], active: string, handleTabClick: (tab: string) => void) => {
  const [tabs, setTabs] = useState(initialTabs);
  const { t } = useTranslation();

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

  // Lógica centralizada para abrir pestañas (Proyectos, 404 o Capturas)
  const openTab = useCallback((tabId: string) => {
    setTabs((prev) => prev.includes(tabId) ? prev : [...prev, tabId]);
    handleTabClick(tabId);
  }, [handleTabClick]);

  // Lógica centralizada para cerrar pestañas
  const closeTab = useCallback((tabId: string) => {
    setTabs((prev) => {
      const updated = prev.filter((t) => t !== tabId);
      
      // Si cerramos la activa, buscamos a cuál saltar
      if (active === tabId) {
        const nextTab = updated.length > 0 ? updated[updated.length - 1] : 'projects';
        handleTabClick(nextTab);
      }
      return updated;
    });
  }, [active, handleTabClick]);

  const navigateLineally = useCallback((direction: 'forward' | 'back') => {
    const currentIndex = tabs.indexOf(active);
    if (direction === 'forward' && currentIndex < tabs.length - 1) {
      handleTabClick(tabs[currentIndex + 1]);
    } else if (direction === 'back' && currentIndex > 0) {
      handleTabClick(tabs[currentIndex - 1]);
    }
  }, [tabs, active, handleTabClick]);

  const handleUrlNavigation = useCallback((inputPath: string) => {
    const cleanInput = inputPath.trim().toLowerCase();
    const match = tabs.find(tabId => {
      const translated = t(`nav.tabs.${tabId}`, { defaultValue: tabId });
      const formatted = translated.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
      return formatted === cleanInput || tabId.toLowerCase() === cleanInput;
    });
    handleTabClick(match || "404");
  }, [tabs, t, handleTabClick]);

  return { tabs, moveTab, navigateLineally, handleUrlNavigation, openTab, closeTab };
};