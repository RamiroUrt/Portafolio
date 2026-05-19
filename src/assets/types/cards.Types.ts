import type { ReactNode,ElementType  } from "react";


export type CardEducationProps = {
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  icon?: ReactNode;
  isLoading?: boolean;
  link?: string;
};

export type SkillItem = {
  name: string;
  icon?: ElementType | ReactNode; 
};

export type CardSkillProps = {
  title: string;
  icon?: ReactNode;
  data: SkillItem[];
  variant?: 'default' | 'badges';
  isLoading?: boolean;
};

export type CardProjectsProps = {
  id : number;
  fontPage?: string;
  title?: string;
  description?: string;
  tags?: string[];
  isLoading?: boolean;
  demo?: string;
  github?: string;
  folderName?: string;
  screenshotCount?: number;
};