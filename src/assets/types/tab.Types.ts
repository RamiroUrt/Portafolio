
export interface TabObject {
  id: string;
  title: string;
  images?: string[];
}


export type TabType = string | TabObject;


export interface SortableTabProps {
  tab: TabType; 
  index: number;
  isActive: boolean;
  moveTab: (dragIndex: number, hoverIndex: number) => void;
  onClick: (id: string) => void;
  onClose: (id: string) => void;
}