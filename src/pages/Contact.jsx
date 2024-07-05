import { Mail } from 'lucide-react';
import '../assets/CardCont.css'
import { Linkedin } from 'lucide-react';


import LanguageOption from '../components/LanguageOption';

import '../assets/LanguageOption.css'

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
        <p className="section_text_p text-center dark:-text--light-white">Get in Touch</p>
        <h1 className="title dark:-text--light-white">Contact Me</h1>

          <div className="container mt-[4rem]">
            <div className="details_container mt-8">
              <div className="contact-info break-all dark:-text--light-white">
                <div className="mail flex gap-2 ">
                  <Mail />
                  <p><a href="mailto:urteagaramiro33@gmail.com" className='dark:-text--light-white'>urteagaramiro33@gmail.com</a></p>
                </div>
                <div className="linkedin flex gap-2">
                  <Linkedin />
                  <p><a target='_blank' href="https://www.linkedin.com/in/ramiro-urteaga-b32430242/"
                   className='dark:-text--light-white'>Linkedin</a></p>
                </div>
              </div>
            </div>
          </div>
    </section>
    <div className="language">
        <LanguageOption />
      </div>
    <section className="nav_contact ">
    <nav className="">
        <div className="links ">
          <span className='dark:-text--light-white'>Ramiro Urteaga</span>
            <li><a href="#about"
            className='dark:-text--light-white'>About me</a></li>
            <li><a href="#experience"
            className='dark:-text--light-white'>Experience</a></li>
            <li><a href="#projects"
            className='dark:-text--light-white'>Project</a></li>
            <li><a href="#contact"
            className='dark:-text--light-white'>Contact</a></li>
        </div>
      </nav>
    </section>

    <div className="footer">
      <p className='text-center'>Copyright © 2024 Ramiro Urteaga. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Contact