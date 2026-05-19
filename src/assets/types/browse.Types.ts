export type BrowserHeaderProps = {
  tabs: string[];
  active: string;
  isLoading: boolean;
  handleRefresh: () => void;
  handleTabClick: (tab: string) => void;
  moveTab: (dragIndex: number, hoverIndex: number) => void; 
  navigateLineally: (direction: 'forward' | 'back') => void;
  handleUrlNavigation: (path: string) => void;
}

