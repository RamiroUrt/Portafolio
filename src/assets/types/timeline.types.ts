export interface TimelineButton {
  text: string;
  link: string;
  iconPaths?: string[];
}

export type TimelineItem = {
  id: string | number;
  company: string; 
  role: string;
  date: string;
  description: string;
  tags?: string[];
  link?: string;
};

export interface TimelineProps {
  data: TimelineItem[];
  isLoading?: boolean;
}