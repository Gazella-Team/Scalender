import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-full' src='/cases/1.png'></img></SwiperSlide>
        <SwiperSlide><img className='h-full' src='/cases/2.png'></img></SwiperSlide>
        <SwiperSlide><img className='h-full' src='/cases/3.png'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
