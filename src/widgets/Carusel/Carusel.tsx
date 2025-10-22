"use client"

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import styles from "./styles.module.scss"
import { useState } from 'react';

export const Carusel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return <Swiper
      modules={[Autoplay]}
      loop
      grabCursor
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      slidesPerView={'auto'}
      className={styles.swiper}
      centeredSlides
      speed={600}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className={styles.swiperSlide} virtualIndex={index}>
          <Image
            className={`${styles.img} ${
              index === activeIndex ? styles.activeImg : ''
            }`}
            width={248}
            height={510}
            src={src}
            alt={`Carousel image ${index + 1}`}
          />
        </SwiperSlide>
      ))}
  </Swiper>
}