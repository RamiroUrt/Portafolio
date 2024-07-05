import CardProjects from "../components/CardProjects"
// import '../assets/CardCont.css'

import Scaloneta from '../../public/img/Scaloneta.png'
import Aloha from '../../public/img/Aloha.png'
import Wingu from '../../public/img/Wingu.png'
import TresDESEOS from '../../public/img/TresDESEOS.png'
import BikeShop from '../../public/img/BikeShop.png'


const Projects = () => {
  return (
    <section id='projects' className="projects">
      <p className="section_text_p text-center dark:-text--light-white">Browse my recent</p>
      <h1 className="title dark:-text--light-white">Projects</h1>
      <div className="color-container flex flex-wrap">
        <div className="container_project">
          <CardProjects 
          img={Scaloneta} 
          title={'Scaloneta'} 
          description={'Credential:<br> guayerd@estudiantes <br> 123456'} 
          isFirst={true}
          location={''}
          locations={'https://symphonious-trifle-c8a521.netlify.app'}
          />
          <CardProjects 
          img={Aloha} 
          title={'Aloha Aromas'} 
          description={"E-commerce about aromas"}
          location={'https://github.com/RamiroUrt/Aloha_tienda'}
          locations={'https://aloha-tienda.onrender.com'} />
          <CardProjects 
          img={Wingu} 
          title={'Wingu'} 
          description={"Donation/shipping web"}
          location={'https://github.com/RamiroUrt/Win.fin/tree/main'}
          locations={'https://frabjous-rolypoly-c02616.netlify.app'} />
          <CardProjects 
          img={TresDESEOS} 
          title={'3Deseos'} 
          description={"Web for 3D printing supplies"}
          location={'https://github.com/3Dseos/3dseos-pagina'}
          locations={'https://pescar-3dseos.web.app'} />
          <CardProjects 
          img={BikeShop} 
          title={'BikeShop'} 
          description={'Cycling supplies website'}
          location={'https://github.com/RamiroUrt/Bike-Shop'}
          locations={'https://bike-shopgt.netlify.app'}/>
        </div>
      </div>
    </section>
  )
}

export default Projects