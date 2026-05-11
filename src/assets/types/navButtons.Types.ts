export type NavButtonsProps = {
  goBack: () => void;
  goForward: () => void;
  handleRefresh: () => void;
};

export type AddressBarProps = {
  isLoading: boolean;
  active: string;
};

export type BrowserHeaderProps = {
  tabs: string[];
  active: string;
  isLoading: boolean;
  goBack: () => void;
  goForward: () => void;
  handleRefresh: () => void;
  handleTabClick: (tab: string) => void;
};