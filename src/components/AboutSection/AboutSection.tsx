"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { rewards, slides } from "./data";

export const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <p className={styles.about}>About</p>
        <p className={styles.text}>
          Разрабатываем сервисы и информационные системы, сопровождаем ПО,
          внедряем корпоративные решения и формируем
          выделенную аутстаф-команду под управление заказчика.
        </p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.results}>
          {rewards.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src="/img/prize.webp" alt="Приз" className={styles.img} />
              <div className={styles.info}>
                <p className={styles.place}>{item.place}</p>
                <p className={styles.where}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          allowTouchMove={false}
          simulateTouch={false}
          className={styles.swiper}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.img}
                alt="Фото с награждения"
                className={styles.slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
