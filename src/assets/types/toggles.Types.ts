import type { ReactNode } from "react";


export type ContentToggleProps = {
  toggle?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isActive: boolean;
  variant: 'theme' | 'language';
  onToggle: () => void;
};

export type ToggleThemeProps = {
  isActive: boolean;
  onClick: () => void;
}

export interface ToggleBtnProps {
  isActive: boolean;
  onClick: () => void;
}