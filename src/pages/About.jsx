/* eslint-disable react/no-unescaped-entities */
import CardCont from "../components/CardCont"
import CardJr from "../components/CardJr";

import { GraduationCap } from 'lucide-react';
import { BicepsFlexed } from 'lucide-react';

const About = () => {
  return (
    <>
    <section className="about" id="about">
      <p className="section_text_p text-center">Get To Know More</p>
      <h1 className="title">About Me</h1>
        <div className="about_container">
            <div className="card-junior">
              <CardJr />
            </div>
          <div className="section_container">
            <CardCont
            title={"Education"}
            description={"Institute Teclab"}
            details={'Programming Technician'}
            Icon={GraduationCap}/>
            <CardCont
            title={"Experience"}
            description={"Font Developer"}
            details={''}
            Icon={BicepsFlexed}/>
          </div>
          <div className="text_content">
            <p className="">👋 Hello, I'm Ramiro. As a technology enthusiast and web developer, I have focused on acquiring knowledge to become a Front End Developer. While my education includes courses in Python, Django, and Java focused on Back End development, my true passion lies in creating interactive and engaging user experiences.
            <br></br>
            I am not only seeking job opportunities but also the chance to continue learning and growing in the technology industry.
            My goal is to apply both my academic knowledge and self-taught skills to real-world projects. I firmly believe that continuous learning is key to staying current in such a dynamic environment as web development.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About