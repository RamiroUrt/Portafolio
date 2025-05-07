import HTML from '../svg/skills/html-svg.svg';
import CSS from '../svg/skills/css-svg.svg';
import JavaScript from '../svg/skills/js-svg.svg';
import ReactIcon from '../svg/skills/react-svg.svg';
import Next from '../svg/skills/next-dot-js-svgrepo-com.svg';
import Bootstrap from '../svg/skills/bootstrap-svg.svg';
import tailwindcss from '../svg/skills/tailwind-svg.svg';
import NodeJS from '../svg/skills/nodejs-svg.svg';
import Express from '../svg/skills/express-svgrepo-com.svg';
import Python from '../svg/skills/python-svg.svg';
import Csharp from '../svg/skills/pngegg.png';
import Net from '../svg/skills/dotnet-svg.svg';
import Java from '../svg/skills/java-svg.svg';
import MongoDB from '../svg/skills/mongodb-svg.svg';
import MySQL from '../svg/skills/mysql-svg.svg';
import Posgre from '../svg/skills/postgresql-svgrepo-com.svg';
import SQLManager from '../svg/skills/MicrosoftSQLServer.svg';

const technologies = {
      fundamentos: [
        { id: 1, text: "HTML", icon: HTML },
        { id: 2, text: "CSS", icon: CSS },
        { id: 3, text: "JavaScript", icon: JavaScript }
      ],
      frontend: [
        { id: 4, text: "React", icon: ReactIcon },
        { id: 5, text: "Next", icon: Next }, 
        { id: 6, text: "Bootstrap", icon: Bootstrap },
        { id: 7, text: "Tailwind", icon: tailwindcss } 
      ],
      backend: [
        { id: 7, text: "Node.js", icon: NodeJS },
        { id: 8, text: "Express", icon: Express },
        { id: 9, text: "Python", icon: Python },
        { id: 10, text: "C#", icon: Csharp },
        { id: 11, text: ".NET", icon: Net },
        { id: 12, text: "Java", icon: Java }
      ],
      databases: [
        { id: 11, text: "MongoDB", icon: MongoDB },
        { id: 12, text: "MySQL", icon: MySQL },
        { id: 13, text: "PostgreSQL", icon: Posgre } ,
        { id: 14, text: "SQL MANAGER", icon: SQLManager } 
      ]
    };

export default technologies