import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import "./ClientAboutME.css"
import { testimonials } from '../../../public/data';

function ClientAboutME() {
  return (
 <div className='ClientAboutME'>
   <div className="container">   
    <div className="col-1">
        <h1>Client say about me</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae laudantium officia ab dolorum voluptatum, odit iure recusandae, laboriosam sit modi repudiandae veritatis eligendi aut quos temporibus, soluta magni voluptatem.</p>
    </div>
    <div className="col-2">
    <Swiper
            loop={true}
            autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // spaceBetween={70}
                // slidesPerView={1}
                breakpoints={{
                    700:{
                        spaceBetween:30,
                        slidesPerView : 2
                    },
                    600:{
                        
                        spaceBetween:60,
                        slidesPerView : 1
                    }
                }}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
        >
        {
            testimonials && testimonials.map(item =>{
        const {id, image,name, desc} = item;
                return(
                    <SwiperSlide className='swiper-col'>
                        <div className='image-col'>
                            <img src={image} />
                        </div>
                        <div className='text-col'>
                            <h1>{name}</h1>
                            <p>{desc}</p>
                        </div>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
    </div>
    </div>
  </div>
  )
}

export default ClientAboutME