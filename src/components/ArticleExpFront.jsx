

import htmlSvg from '../assets/svg/html-svg.svg';
import cssSvg from '../assets/svg/css-svg.svg';
import jsSvg from '../assets/svg/js-svg.svg';
import reactSvg from '../assets/svg/react-svg.svg';
import tailwindSvg from '../assets/svg/tailwind-svg.svg';
import bootstrapSvg from '../assets/svg/bootstrap-svg.svg';
import nodeSvg from '../assets/svg/nodejs-svg.svg';
import mongoSvg from '../assets/svg/mongodb-svg.svg';
import mySQLSvg from '../assets/svg/mysql-svg.svg';
import pythonSvg from '../assets/svg/python-svg.svg';
import javaSvg from '../assets/svg/java-svg.svg';
import csharpSvg from '../assets/svg/csharp-svg.svg';
import dotnetSvg from '../assets/svg/dotnet-svg.svg';

import CardExp from './CardExp';



const ArticleExp = () => {
  return (
    <>
  <div className='article-container dark:-text--light-white flex'>
      <CardExp tech={"Html"} svg={htmlSvg} />
      <CardExp tech={"Css"} svg={cssSvg} />
      <CardExp tech={"Javascript"} svg={jsSvg} />
      <CardExp tech={"React"} svg={reactSvg} />
      <CardExp tech={"Tailwind"} svg={tailwindSvg} />
      <CardExp tech={"Bootstrap"} svg={bootstrapSvg} />
      <CardExp tech={"NodeJS"} svg={nodeSvg} />
      <CardExp tech={"MongoDB"} svg={mongoSvg} />
      <CardExp tech={"mySQL"} svg={mySQLSvg} />
      <CardExp tech={"Python"} svg={pythonSvg} />
      <CardExp tech={"Java"} svg={javaSvg} />
      <CardExp tech={"C#"} svg={csharpSvg} />
      <CardExp tech={"Dotnet"} svg={dotnetSvg} />
    </div>
    </>
  )
}

export default ArticleExp