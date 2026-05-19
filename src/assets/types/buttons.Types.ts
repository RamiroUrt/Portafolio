import type { ReactNode } from "react";

export type DownloadBtnProps = {
  text: string;
  icon?: ReactNode;
  fileUrl?: string;
};

export type SocialBtnProps = {
  icon?: ReactNode;
  isLoading?: boolean;
  href?: string;
};

export type BaseIconProps = {
  icon: ReactNode;
  isLoading?: boolean;
};

export type ButtonWithLinksProps ={
    text: string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export type  CopyBtnProps = {
  isCopied: boolean;
  className?: string;
}
