

import type { TitleProps } from "../../../assets/types/titles.Types";

const Title = ({ text }: TitleProps) => (
  <p className="layout-title">{text}</p>
);

export default Title;