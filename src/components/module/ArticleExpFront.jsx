import { Fade } from "react-awesome-reveal";
import { techData } from '../../assets/constant/techData.js'; // Asegúrate de usar la ruta correcta
import CardExp from '../CardExp.jsx';

const ArticleExp = () => {
  return (
    <div className="article-container dark:-text--light-white flex">
      <Fade cascade duration={600}>
        {techData.map((tech, index) => (
          <CardExp key={index} tech={tech.tech} svg={tech.svg} />
        ))}
      </Fade>
    </div>
  );
};

export default ArticleExp;
