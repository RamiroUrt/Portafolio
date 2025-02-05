


import BtnBlack from "../components/BtnBlack";
import BtnWhite from "../components/BtnWhite";
import '../assets/css/CardCont.css';
import ButtonDescription from "./ButtonDescription";


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 400,
  once: true,
  startEvent: 'DOMContentLoaded',
  delay: 0, 
  offset: 120,
});

// eslint-disable-next-line react/prop-types
const CardProjects = ({ img, title, alt, description, isFirst, location, locations, technologies = [] }) => {


  return (
    <>
      <article className="details_container"
          data-aos="fade-up">
        <div className="article-container"
        >
          <div className="project-img">
            <img src={img} alt={alt} className="rounded-3xl object-cover" />            
            <div className="contenido-tec">
            </div>
          </div>
                <div className="menu flex flex-col gap-4"
                >
                {technologies.map((tech, index) => 
                  <ButtonDescription key={index} text={tech} />
                )}
                </div>
          </div>
        <h2 data-cursor="text" className="project-title mt-4 font-bold text-jr-text text-2xl">{title}</h2>
        <p data-cursor="text" className="section_text_p text-center mt-3 dark:-text--light-white text-sm " dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className="btn_container mt-5">
          <div>
            {isFirst ? (
              <BtnWhite text={"GitHub"}
                className="cursor-not-allowed"
                location={location} />
            ) : (
              <BtnWhite text={"GitHub"}
                location={location} />
            )}
          </div>
          <BtnBlack text={"Demo"}
            locations={locations} />
        </div>
      </article>
    </>
  );
};

export default CardProjects;