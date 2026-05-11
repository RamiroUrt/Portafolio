import type { ReactNode } from "react";

export type ItemContactProps = {
  text: string;
  icon?: ReactNode;
  type?: 'email' | 'location' | 'link'; 
  isLoading?: boolean;
};

export type ItemHabProps = {
  icon: ReactNode;
  tech: string;
  isLoading?: boolean;
};