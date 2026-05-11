import type { ReactNode } from "react";

export type LayoutTitleProps = {
  text: string;
  isLoading?: boolean;
};

export type TitleProps = {
  text: string;
};

export type SubTitleProps = {
  text: string;
};

export type TitleWithIconProps = {
  text: string;
  icon?: ReactNode;
  isLoading?: boolean;
};