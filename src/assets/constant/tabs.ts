
import AboutMe from "../../Page/views/AboutMe/AboutMe";
import Experience from '../../Page/views/Experience/Experience'
import Projects from "../../Page/views/Projects/Projects";
import Skills from "../../Page/views/Skills/Skills";
import Education from "../../Page/views/Education/Education";
import Resume from "../../Page/views/Resume/Resume";
import NotFound from "../../Page/views/NotFound/NotFound";
const TAB_COMPONENTS = {
  "About": AboutMe,
  "Experience": Experience,
  "Projects": Projects,
  "Skills": Skills,
  "Education": Education,
  "Resume": Resume,
  "404": NotFound,
};

export default TAB_COMPONENTS;