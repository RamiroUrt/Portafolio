import type { SubTitleProps } from "../../../assets/types/titles.Types";

const SubTitle = ({ text }: SubTitleProps) => (
  <p className="subtitle"><b>{text}</b></p>
);

export default SubTitle;