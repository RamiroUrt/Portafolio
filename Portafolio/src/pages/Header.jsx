/* eslint-disable react/no-unescaped-entities */
import Nav from "../components/Nav"
import Perfil from '../../public/img/Perfil.jpg'
import BtnWhite from "../components/BtnWhite"
import BtnBlack from "../components/BtnBlack"
import SocialLInk from "../components/SocialLInk"


const Header = () => {
  return (
    <>
      <Nav />
    <section id='profile' className="profile">
      <div className="section_pic">
        <img src={Perfil} alt="" />
      </div>
      <div className="section_text ">
        <p className="section_text_p">👋Hello, I'm</p>
        <h1 className="title">Ramiro Urteaga</h1>
        <p className="section_text_p text-amber-300 bouncy-text">Fronted Developer</p>
        <div className="btn_container">
          {/*btn white*/}
          <BtnWhite text={'Download CV'} location={'https://drive.google.com/file/d/1bI3g_NExYZ5blPfy97-NOC4KsiPRsk8K/view?usp=sharing'}/>
          {/*btn black*/}
          <a href="#contact">
            <BtnBlack text={'Contact info'}/>
          </a>
        </div>
        <p className="section_text_p2">📍Maggiolo - Santa Fe 🇦🇷</p>
        <div className="social_link">
        {/*Social Link*/}
        <SocialLInk />
        </div>
      </div>
    </section>
    </>
  )
}

export default Header