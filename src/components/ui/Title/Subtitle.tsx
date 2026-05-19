import type { SubTitleProps } from "../../../assets/types/titles.Types";

const SubTitle = ({ text }: SubTitleProps) => (
  <h2 className="subtitle"><b>{text}</b></h2>
);

export default SubTitle;