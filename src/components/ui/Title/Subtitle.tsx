import type { SubTitleProps } from "../../../assets/types/titles.Types";
import '../../../styles/fonts.css';

const SubTitle = ({ text }: SubTitleProps) => (
  <h2 className="subtitle">{text}</h2>
);

export default SubTitle;