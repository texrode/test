"use client"

import { ReactNode } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from "framer-motion"
import { useInViewClass } from "@/shared/hooks/useInViewClass"

interface IDescriptionCaseSection {
  mainDescp: ReactNode,
  secondDescp: string, 
  imgSrc?: string,
  imageBottomPath?: string,
  imageRigthPath?: string,
  countSection: string,
  imagesCarusel?: string[],
  variant?: "papos"
}

const textParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const DescriptionCaseSection = ({mainDescp, secondDescp, countSection, imgSrc, imageRigthPath, imageBottomPath, imagesCarusel, variant}: IDescriptionCaseSection) => {
  const { ref: bottomRef, isVisible: bottomVisible } = useInViewClass();
  const { ref: rigthPhoneRef, isVisible: rigthVisiblePhone } = useInViewClass();
  
  return <section id="descp" data-title="Описание" className={styles.section}>
      <motion.div
      className={styles.main}
      variants={textParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className={styles.title} variants={fadeSlideUp}>
          <motion.span className={styles.titleCount} variants={fadeSlideUp}>
            {countSection}
          </motion.span>
          Описание
        </motion.h2>
        <motion.div
          className={`${styles.descp} ${imageBottomPath ? styles.secondary : ""}`}
          variants={textParent}
        >
          <motion.p className={styles.mainDescp} variants={fadeSlideUp}>
            {mainDescp}
          </motion.p>
          <motion.p className={styles.secondDescp} variants={fadeSlideUp}>
            {secondDescp}
          </motion.p>
        </motion.div>
      </motion.div>
      {imagesCarusel && <Swiper
      modules={[Autoplay]}
      loop
      grabCursor
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      slidesPerView={'auto'}
      className={styles.swiper}
      centeredSlides
      speed={600}
      spaceBetween={12}
      >
        {imagesCarusel.map((src, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide} virtualIndex={index}>
            <Image
              className={styles.img}
              width={301}
              height={189}
              src={src}
              alt={`Carousel image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>}
      {imageBottomPath && (
          <Image
            ref={bottomRef as any}
            className={`${styles.bottomImg} ${styles[variant ? variant : ""]} ${bottomVisible ? styles.visible: ""}`}
            height={642}
            width={988}
            alt="phone"
            src={imageBottomPath}
          />
      )}
      {imageRigthPath && (
          <Image
            className={`${styles.rigthImg} ${bottomVisible ? styles.visible: ""}`}
            height={1086}
            width={678}
            alt="phone"
            src={imageRigthPath}
          />
      )}
      {imgSrc && <Image 
        ref={rigthPhoneRef as any} 
        className={`${styles.imgPhone} 
        ${rigthVisiblePhone ? styles.visible: ""} `} 
        height={339} 
        width={500} 
        alt="phone" 
        src={imgSrc}/>
      }
    </section>
}