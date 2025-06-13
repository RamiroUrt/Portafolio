import HTML from '../svg/skills/html-svg.svg';
import CSS from '../svg/skills/css-svg.svg';
import JavaScript from '../svg/skills/js-svg.svg';
import ReactIcon from '../svg/skills/react-svg.svg';
import Next from '../svg/skills/next-dot-js-svgrepo-com.svg';
import Bootstrap from '../svg/skills/bootstrap-svg.svg';
import tailwindcss from '../svg/skills/tailwind-svgrepo-com.svg';
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
import Typescript from '../svg/skills/typescript-16-svgrepo-com.svg';

const technologies = {
      fundamentos: [
        { id: 1, text: "HTML", icon: HTML, alt: "HTML", },
        { id: 2, text: "CSS", icon: CSS, alt: "CSS" },
        { id: 3, text: "JavaScript", icon: JavaScript, alt: "JavaScript" }
      ],
      frontend: [
        { id: 4, text: "React", icon: ReactIcon, alt: "React" },
        { id: 5, text: "Next", icon: Next, alt: "Next" },
        { id: 5, text: "Typescript", icon: Typescript, alt: "Typescript" },
        { id: 6, text: "Bootstrap", icon: Bootstrap, alt: "Bootstrap" },
        { id: 7, text: "Tailwind", icon: tailwindcss, alt: "Tailwind" } 
      ],
      backend: [
        { id: 7, text: "Node.js", icon: NodeJS, alt: "Node.js" },
        { id: 8, text: "Express", icon: Express, alt: "Express" },
        { id: 9, text: "Python", icon: Python, alt: "Python" },
        { id: 10, text: "C#", icon: Csharp, alt: "C#" },
        { id: 11, text: ".NET", icon: Net, alt: ".NET" },
        { id: 12, text: "Java", icon: Java, alt: "Java" }
      ],
      databases: [
        { id: 11, text: "MongoDB", icon: MongoDB, alt: "MongoDB" },
        { id: 12, text: "MySQL", icon: MySQL, alt: "MySQL" },
        { id: 13, text: "PostgreSQL", icon: Posgre, alt: "PostgreSQL" } ,
        { id: 14, text: "SQL MANAGER", icon: SQLManager, alt: "SQL MANAGER" } 
      ]
    };

export default technologies