import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data =[
  {
    avatar:AVTR1,
    name: 'Tina Show',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
  },
  {
    avatar:AVTR2,
    name: 'Tina Show',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
  },
  {
    avatar:AVTR3,
    name: 'Tina Show',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
  },
  {
    avatar:AVTR4,
    name: 'Tina Show',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi numquam eos at impedit dolor quas quos molestiae molestias corrupti!'
  },
]


const Testimonials = () => {
  return (
   <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

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
    data.map(({avatar,name,review}, index)=>{
      return(
        <SwiperSlide key={index} className='testimonial'>
        <div className="client__avatar">
          <img src={avatar} alt="Avatar One" />
        </div>
        <h5 className='client__name'>{name}</h5>
        <small className='client__review'>{review}</small>
        
      </SwiperSlide>
      )
    })
   }
    </Swiper>

   </section>
  )
}

export default Testimonials