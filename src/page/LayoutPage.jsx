import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Experience from './view/Experience';
import AboutMe from './view/AboutMe';
import Projects from './view/Project';
import Skills from './view/Skills';
import PDF from './view/PDF';
import Education from './view/Education';
import Mate from '../assets/img/mate.webp';

const LayoutPage = ({section}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const prevSectionRef = useRef(section);

    const sections = {
      'About Me': <AboutMe />,
      'Experience': <Experience />,
      'Projects': <Projects />,
      'Skills': <Skills />,
      'Resume': <PDF />,
      'Education': <Education />,
 
      'Sobre mí': <AboutMe />,
      'Experiencia': <Experience />,
      'Proyectos': <Projects />,
      'Habilidades': <Skills />,
      'Educación': <Education />,
      'Currículum': <PDF />,
    };

    useEffect(() => {
      if (!contentRef.current) return;
  
      // Configuración inicial (primer render)
      if (prevSectionRef.current === section) {
        gsap.set(contentRef.current, { opacity: 1, x: 0 });
        return;
      }
  
      // ANIMACIÓN SIMULTÁNEA (cambio de sección)
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: 1000 },  // Estado inicial
        {                      // Animación
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: 'power3.out',
          onStart: () => {
            prevSectionRef.current = section; // Actualiza la sección DURANTE la animación
          }
        }
      );
  
    }, [section]);
  
  
  
  return (
    <>

    <main ref={containerRef} >
      <div ref={contentRef} className='layout-page' key={section} style={{ opacity: 0 }}>
        {sections[section] || <div>Selecciona una sección</div>}
      </div>
      <footer>
      <div className="line-footer"></div>
        <div className="footer-center">
          <img src={Mate} alt="" loading='lazy'/>
          <p className=''>© {new Date().getFullYear()} Ramiro Urteaga</p>
        </div>
        <div className="line-footer"></div>
      </footer>
    </main>

    </>
  )
}

export default LayoutPage