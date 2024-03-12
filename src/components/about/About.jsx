import React from 'react'
import './about.css'
import ME2 from '../../assets/mekafe.jpg'
import {FaAward, FaHtml5, FaReact,FaNodeJs} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript,SiTypescript,SiNextdotjs,SiCanva,SiRedux,SiTailwindcss } from "react-icons/si";
import { DiMysql,DiMongodb } from "react-icons/di";
// import { FaAtom } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
//data array

const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME2} aria-hidden alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div><p> through bootcamp Binar Academy and certifications. 🚀 With 1++ years of hands-on experience as a frontend web developer, I bring expertise in JavaScript, TailwindCSS, React, Next.js, and an eye for design in Figma, for backend i can use mongodb, mysql and nodeJs.  I'm primed to contribute innovative solutions to your projects. Currently seeking a full-time role, my commitment to perpetual learning and creative problem-solving 

✨Step into my digital realm through this portfolio, Let's collaborate on crafting exceptional web applications, pushing the boundaries of frontend development together 🤝.</p></div>
        <div className="about__cards">

          
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200 + Worlwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Project</h5>
            <small>10+ Project</small>
          </article>
        </div>

        <p></p>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>

    </div>
   </section>
  )
}

export default About