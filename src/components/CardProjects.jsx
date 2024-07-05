/* eslint-disable react/prop-types */
import BtnBlack from "../components/BtnBlack"
import BtnWhite from "../components/BtnWhite"
import '../assets/CardCont.css'


const CardProjects = ({img, title, description, isFirst, location, locations }) => {
  return (
    <>
        <article className="details_container">
            <div className="article-container">
              <img src={img} alt="" className="project-img rounded-3xl object-cover" />
            </div>
            <h2 className="project-title mt-4 font-bold dark:-text--light-white">{title}</h2>
            <p className="section_text_p text-center mt-3 dark:-text--light-white" dangerouslySetInnerHTML={{ __html: description }}></p>
            <div className="btn_container mt-5">
            <div>
            { isFirst ? (
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
  )
}

export default CardProjects