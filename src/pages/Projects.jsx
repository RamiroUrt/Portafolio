import CardProjects from "../components/CardProjects";


import Scaloneta from '../../public/img/Scaloneta.png';
import Aloha from '../../public/img/Aloha.png';
import Wingu from '../../public/img/Wingu.png';
import TresDESEOS from '../../public/img/TresDESEOS.png';
import BikeShop from '../../public/img/BikeShop.png';
import VideoConverter from '../../public/img/VideoConverter.png';
import CoquettePortada from '../../public/img/Coquette.png'
import GrillHouse from '../../public/img/GrillHouse.png'


import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id='projects' className="projects">
      <p className="section_text_p text-center dark:-text--light-white">{t('projects.browseMyRecent')}</p>
      <h1 className="title dark:-text--light-white">{t('projects.title')}</h1>
      <div className="color-container flex flex-wrap">
        <div className="container_project">
          <CardProjects 
            img={Scaloneta} 
            title={t('projects.cards.scaloneta.title')} 
            description={t('projects.cards.scaloneta.description')} 
            isFirst={true}
            location={''}
            locations={'https://symphonious-trifle-c8a521.netlify.app'}
            technologies={['HTML', 'CSS', 'JS']}
          />
          <CardProjects 
            img={Aloha} 
            title={t('projects.cards.aloha.title')} 
            description={t('projects.cards.aloha.description')}
            location={'https://github.com/RamiroUrt/Aloha_tienda'}
            locations={'https://aloha-tienda.onrender.com'}
            technologies={['HTML', 'CSS', 'JS', 'EXPRESS']} 
          />
          <CardProjects 
            img={Wingu} 
            title={t('projects.cards.wingu.title')} 
            description={t('projects.cards.wingu.description')}
            location={'https://github.com/RamiroUrt/Win.fin/tree/main'}
            locations={'https://frabjous-rolypoly-c02616.netlify.app'} 
            technologies={['HTML', 'CSS', 'JS', 'APEX']} 
          />
          <CardProjects 
            img={TresDESEOS} 
            title={t('projects.cards.tresDeseos.title')} 
            description={t('projects.cards.tresDeseos.description')}
            location={'https://github.com/3Dseos/3dseos-pagina'}
            locations={'https://pescar-3dseos.web.app'}
            technologies={['HTML', 'CSS', 'JS', 'WEBPACK']}  
          />
          <CardProjects 
            img={BikeShop} 
            title={t('projects.cards.bikeShop.title')} 
            description={t('projects.cards.bikeShop.description')}
            location={'https://github.com/RamiroUrt/Bike-Shop'}
            locations={'https://bike-shopgt.netlify.app'}
            technologies={['HTML', 'CSS', 'REACT']}  
          />
          <CardProjects 
            img={VideoConverter} 
            title={t('projects.cards.VideoConverter.title')} 
            description={t('projects.cards.VideoConverter.description')}
            location={'https://github.com/RamiroUrt/ConverterToMp3'}
            locations={'https://convertertomp3.onrender.com'}
            technologies={['HTML', 'CSS', 'JS', 'NODEJS', 'EXPRESS']}  
          />
            <CardProjects 
            img={CoquettePortada} 
            title={t('projects.cards.Coquette.title')} 
            description={t('projects.cards.Coquette.description')}
            location={'https://github.com/RamiroUrt/Coquette'}
            locations={'https://coquette.vercel.app'}
            technologies={['HTML', 'CSS', 'JS', 'REACT']} 
          />
          <CardProjects 
            img={GrillHouse} 
            title={t('projects.cards.Grill.title')} 
            description={t('projects.cards.Grill.description')}
            location={'https://github.com/RamiroUrt/Grill-House'}
            locations={'https://grill-house-three.vercel.app'}
            technologies={['HTML', 'CSS', 'JS', 'REACT']} 
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
