

import type { TitleProps } from "../../../assets/types/titles.Types";

const Title = ({ text }: TitleProps) => (
  <h1 className="layout-title">{text}</h1>
);

export default Title;