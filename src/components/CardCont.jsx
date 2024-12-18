/* eslint-disable react/prop-types */
import '../assets/css/CardCont.css'

const CardCont = ({ Icon, title, description, details }) => {
  return (
    <>
    <div className="about_details  dark:-text--light-white">
      <div className="details_container_about">
        <div className="section_pic_cont">
          {Icon && <Icon className='icono' />}
        </div>
              <h2 data-cursor="text" className='font-medium text-jr-text'>{title}</h2>
              <p data-cursor="text" className=' dark:-text--light-white' dangerouslySetInnerHTML={{ __html: description }}></p>
              <p data-cursor="text" className=' dark:-text--light-white' dangerouslySetInnerHTML={{ __html: details }}></p>
        </div>
      </div>
    </>
  );
};

export default CardCont;
