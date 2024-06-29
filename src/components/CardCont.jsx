/* eslint-disable react/prop-types */
import '../assets/CardCont.css'

const CardCont = ({ Icon, title, description, details }) => {
  return (
    <>
    <div className="about_details">
      <div className="details_container_about">
        <div className="section_pic_cont">
          {Icon && <Icon className='icono' />}
        </div>
              <h2 className='font-medium '>{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <p dangerouslySetInnerHTML={{ __html: details }}></p>
        </div>
      </div>
    </>
  );
};

export default CardCont;
