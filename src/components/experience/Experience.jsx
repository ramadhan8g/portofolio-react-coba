
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiCanva,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { DiMysql, DiMongodb } from "react-icons/di";
// import { FaAtom } from "react-icons/fa6";
import { MdCheckCircleOutline } from "react-icons/md";
import { FaBootstrap } from "react-icons/fa";
// import { iconType } from "react-icons";
export const data = [
  {
    id: 1,
    title: "CSS",
    icon: <IoLogoCss3/>,
  },
  {
    id: 2,
    title: "HTML",
    icon: <FaHtml5/>,
  },
  {
    id: 3,
    title: "Javascript",
    icon: <SiJavascript/>
  },
  {
    id: 4,
    title: "Typescript",
    icon: <SiTypescript/>
  },
  {
    id: 5,
    title: "ReactJS",
    icon: <FaReact/>
  },
  {
    id: 6,
    title: "NextJS",
    icon: <SiNextdotjs/>
  },
  {
    id: 7,
    title: "Bootstrap",
    icon: <FaBootstrap/>
  },
  {
    id: 8,
    title: "Tailwind",
    icon: <SiTailwindcss/>
  },
  {
    id: 9,
    title: "shadeCN",
    icon: <MdCheckCircleOutline/>
  },
  {
    id: 10,
    title: "ReduxToolkit",
    icon: <SiRedux/>
  },
  {
    id: 11,
    title: "Zustand",
    icon: <MdCheckCircleOutline/>
  },
  {
    id: 12,
    title: "MongoDB",
    icon: <DiMongodb/>
  },
  {
    id: 13,
    title: "SQL",
    icon: <DiMysql/>
  },
  {
    id: 14,
    title: "NodeJS",
    icon: <FaNodeJs/>
  },
  {
    id: 15,
    title: "Canva",
    icon: <SiCanva/>
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container ">
        {/* Experience Frontend Start */}
        <div className="experience__frontend">
          <h3>My Skill</h3>
          <div className="experience__content ">
            {data.map((data) => {
            //  const { id, title, icon } = data;
              return (
                <div key={data.id} className=" sm:max-w-76 bg-slate-600">
                  <article className="experience__details">
            
                      <p className="experience__icon ">{data.icon}</p> 
                      <small className="text-light">{data.title}</small>
             
          
                   
                  </article>
                </div>
              );
            })}

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
        {/* Expeprience Frontend End */}

        {/* Experience Backend */}
        {/* <div className="experience__backend">
          <h3>Backend End Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Mysql</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>

        </div> */}
      </div>
    </section>
  );
};

export default Experience;
