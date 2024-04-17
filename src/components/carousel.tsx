import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const testimonialsData = [
  {heading:"Amazing Service!", description: "Jeg har arbejdet sammen med Niclas i et par måneder. I vores første måned havde vi i gennemsnit omkring 5-7 salgsopkald om ugen, hvilket var fantastisk. Indtil videre har vi brugt omkring 22.500 kr. og tjent 135.000 kr. med dem. Jeg vil varmt anbefale at give dem en chance.", name:"Direktør", image:"/people/Ventur CEO.jpg", position:"af Brand Strategy Bureau"},
  {heading:"Impressive results", description: "Før jeg indledte samarbejde med dem, havde jeg arbejdet med og hørt om mange lead genererings virksomheder. Ingen var i stand til at levere resultater som Niclas. Indtil videre har det været meget imponerende, hvad Scalender har formået at gøre - også kommunikationen har været super - de er ganske enkelt professionelle og ordentlige. Overordnet set kunne jeg ikke anbefale dem mere!", name:"Direktør", image:"/people/Gizeno CEO.jpg", position:"af E-commerce Bureau"},
  {heading:"Big recommendation!", description: "Scalender har givet mig med en drastisk øgning i salg ved at levere modne og salgsparate leads. Det har vist sig, at jeg ikke vidste nok om salg før jeg arbejdede med Scalender. At have en partner som står for alt er fantastisk. Indtil videre har Scalender øget min omsætning med flere hundrede tusinder. Stor anbefaling herfra.", name:"Indehaver", image:"/people/Gustav CEO.jpg", position:"af E-commerce Bureau"},
]

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {testimonialsData.map(v => <SwiperSlide key={v.heading}><TestimonialCard Obj={v} /></SwiperSlide>)}
      </Swiper>
    </>
  );
}

const TestimonialCard = (props:any) => {
  return (
      <div style={{background:"linear-gradient(338deg, rgba(174,186,247,1) 2%, rgba(255,255,255,1) 48%, rgba(255,255,255,1) 100%)"}}  className="p-10 border-[1px] h-full rounded-xl flex flex-col bg-white justify-between">
          <img className="w-[100px] mb-[20px]" src="/5-star.webp"></img>
          <div className="flex-1">
              <h1 className="text-xl font-light mb-[14px]">{props.Obj.heading}</h1>
              <p className="text-black font-light mb-12 text-xl">{props.Obj.description}</p>
          </div>
          <div className="flex items-center gap-3">
              <img className="w-[50px] h-[50px] object-cover rounded-full" src={props.Obj.image}></img>
              <div>
                  <h3 className="font-semibold text-sm text-black">{props.Obj.name}</h3>
              </div>
          </div>
      </div>

  )
}