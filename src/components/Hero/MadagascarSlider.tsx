"use client"

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const slides = [
  {
    image: '/images/hero/AerialBaobab.webp',
    title: 'Aerial View of Baobabs',
    text: 'A stunning aerial view of the iconic Baobab trees.',
    alt: 'Aerial view of Baobab trees'
  },
  {
    image: '/images/hero/baobabAlee.webp',
    title: 'Allée des Baobabs',
    text: 'The famous avenue lined with majestic Baobab trees.',
    alt: 'Allée des Baobabs'
  },
  {
    image: '/images/hero/baobabMety.webp',
    title: 'Baobab Mety Be',
    text: 'A close-up of the Baobab Mety Be tree.',
    alt: 'Baobab Mety Be'
  },
  {
    image: '/images/hero/baobabNight.webp',
    title: 'Baobab at Night',
    text: 'Baobab trees under the night sky.',
    alt: 'Baobab trees at night'
  },
  {
    image: '/images/hero/Ilakaka.webp',
    title: 'Ilakaka',
    text: 'The vibrant town of Ilakaka.',
    alt: 'Ilakaka town'
  },
  {
    image: '/images/hero/lemurs.webp',
    title: 'Lemurs',
    text: 'The unique lemurs of Madagascar.',
    alt: 'Lemurs'
  },
  {
    image: '/images/hero/MajungaRedRocks.webp',
    title: 'Majunga Red Rocks',
    text: 'The striking red rocks of Majunga.',
    alt: 'Majunga red rocks'
  },
  {
    image: '/images/hero/OnRoadBaobab.webp',
    title: 'On the Road with Baobabs',
    text: 'Baobab trees along the road.',
    alt: 'Baobab trees along the road'
  },
  {
    image: '/images/hero/route.webp',
    title: 'Route',
    text: 'A scenic route in Madagascar.',
    alt: 'Scenic route'
  },
  {
    image: '/images/hero/routeverte.webp',
    title: 'Route Verte',
    text: 'The green route through Madagascar.',
    alt: 'Green route'
  },
  {
    image: '/images/hero/TradTypi.webp',
    title: 'Traditional Typi',
    text: 'Traditional Malagasy architecture.',
    alt: 'Traditional Malagasy architecture'
  },
  {
    image: '/images/hero/tsingy1.webp',
    title: 'Tsingy 1',
    text: 'The unique rock formations of Tsingy.',
    alt: 'Tsingy rock formations'
  },
  {
    image: '/images/hero/tsingy2.webp',
    title: 'Tsingy 2',
    text: 'Another view of the Tsingy formations.',
    alt: 'Tsingy rock formations'
  },
  {
    image: '/images/hero/tsingy3.webp',
    title: 'Tsingy 3',
    text: 'More of the Tsingy rock formations.',
    alt: 'Tsingy rock formations'
  },
  {
    image: '/images/hero/tsingy4.webp',
    title: 'Tsingy 4',
    text: 'Yet another view of the Tsingy formations.',
    alt: 'Tsingy rock formations'
  }
];


const MadagascarSlider= () => {
  return (
    <section aria-label="Madagascar highlights slider" >
      <Swiper
        modules={[ Pagination, Autoplay]}
     
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        slidesPerGroup={1}
        className=" inset-0 "//mx-auto sm:max-w-[400px] md:max-w-[540px] lg:max-w-[1520px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
             
              <Image
                src={slide.image}
                alt={slide.alt}
                //fill
                 width={1680}
                 height={720}
                //className='object-contain'
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MadagascarSlider;