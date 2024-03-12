import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'
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
import { FaBootstrap } from "react-icons/fa"

// import Swiper core and required modules
import { Navigation, Pagination, } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// const data =[
//   {
//     avatar:AVTR1,
//     name: 'Tina Show',
//     review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
//   },
//   {
//     avatar:AVTR2,
//     name: 'Tina Show',
//     review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
//   },
//   {
//     avatar:AVTR3,
//     name: 'Tina Show',
//     review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
//   },
//   {
//     avatar:AVTR4,
//     name: 'Tina Show',
//     review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
//   },
// ]
export const data = [
  {
    id: 1,
    name: "CSS",
    avatar: <IoLogoCss3/>,
  },
  {
    id: 2,
    name: "HTML",
    avatar: <FaHtml5/>,
  },
  {
    id: 3,
    name: "Javascript",
    avatar: <SiJavascript/>
  },
  {
    id: 4,
    name: "Typescript",
    avatar: <SiTypescript/>
  },
  {
    id: 5,
    name: "ReactJS",
    avatar: <FaReact/>
  },
  {
    id: 6,
    name: "NextJS",
    avatar: <SiNextdotjs/>
  },
  {
    id: 7,
    name: "Bootstrap",
    avatar: <FaBootstrap/>
  },
  {
    id: 8,
    name: "Tailwind",
    avatar: <SiTailwindcss/>
  },
  {
    id: 9,
    name: "shadeCN",
    avatar: <MdCheckCircleOutline/>
  },
  {
    id: 10,
    name: "ReduxToolkit",
    avatar: <SiRedux/>
  },
  {
    id: 11,
    name: "Zustand",
    avatar: <MdCheckCircleOutline/>
  },
  {
    id: 12,
    name: "MongoDB",
    avatar: <DiMongodb/>
  },
  {
    id: 13,
    name: "SQL",
    avatar: <DiMysql/>
  },
  {
    id: 14,
    name: "NodeJS",
    avatar: <FaNodeJs/>
  },
  {
    id: 15,
    name: "Canva",
    avatar: <SiCanva/>
  },
];


const Testimonials = () => {
  return (
   <section id='testimonials'>
     <h5>What Skills I have</h5>
      <h2>My Experience</h2>

    <Swiper className="container testimonials__container"
     modules={[Navigation, Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     navigation
     pagination={{ clickable: true }}
    // //  scrollbar={{ draggable: true }}
    //  onSwiper={(swiper) => console.log(swiper)}
    //  onSlideChange={() => console.log('slide change')}
    >
   {
    data.map((data, index)=>{
      return(
        <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
        <p className="">{data.avatar}</p> 
        </div>
        <h5 className='client__name'>{data.name}</h5>
      
       
      </SwiperSlide>
      )
    })
   }
    </Swiper>

   </section>
  )
}

export default Testimonials