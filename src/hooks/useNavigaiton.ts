import { useState, useEffect } from "react";

const TABS = ["About", "Experience", "Projects", "Skills", "Education", "Resume"];

export const useNavigation = () => {
  const [active, setActive] = useState("About");
  const [isLoading, setIsLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [active, refreshKey]);

  const goBack = () => {
    setIsLoading(true); 
    const currentIndex = TABS.indexOf(active);
    const nextIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    setActive(TABS[nextIndex]);
  };

  const goForward = () => {
    setIsLoading(true); 
    const currentIndex = TABS.indexOf(active);
    const nextIndex = (currentIndex + 1) % TABS.length;
    setActive(TABS[nextIndex]);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey(prev => prev + 1);
  };

const handleTabClick = (tab: string) => {
      if (active !== tab) {
      setIsLoading(true);
      setActive(tab);
    }
  };

  return { active, isLoading, refreshKey, goBack, goForward, handleRefresh, handleTabClick, tabs: TABS };
};