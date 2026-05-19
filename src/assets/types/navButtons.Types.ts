export type NavButtonsProps = {
  goBack: () => void;
  goForward: () => void;
  handleRefresh: () => void;
};


export type BrowserHeaderProps = {
  tabs: string[];
  active: string;
  isLoading: boolean;
  handleRefresh: () => void;
  handleTabClick: (tab: string) => void;
  handleNewTab: () => void;
  moveTab: (dragIndex: number, hoverIndex: number) => void;
  navigateLineally: (direction: 'forward' | 'back') => void;
  handleUrlNavigation: (path: string) => void;
  onCloseTab: (id: string) => void;
  showTabsOverlay: boolean;
  onToggleTabsOverlay: () => void;
};

export type  AddressBarProps = {
  isLoading: boolean;
  active: string;
  onNavigate: (path: string) => void;
}
