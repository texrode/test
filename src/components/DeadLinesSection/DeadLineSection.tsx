"use client"

import { Icon } from "@/shared/assets/icons/icons"
import styles from "./styles.module.scss"
import { IconName } from "@/shared/assets/icons/types"
import { Carusel } from "@/widgets/Carusel/Carusel"
import { AnimatedSection } from "@/shared/uikit/AnimatedSection/AnimatedSection"
import Image from "next/image"
import { motion } from "framer-motion"

interface IDeadLineItem{
  title: string,
  subtitle: string
}

interface IDeadLineSection {
  imagesCarusel?: string[],
  imgPath?: string,
  deadlineList: IDeadLineItem[],
  countSection: string
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const svgVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeSlideCustom = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.3 },
  }),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const DeadLineSection = ({imagesCarusel, deadlineList, countSection, imgPath}: IDeadLineSection) => {
  return (
  <section
    id="Сроки"
    data-title="Сроки"
    className={styles.section}
  >
    <div className={styles.container}> 
        <motion.h2
          className={styles.title}
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className={styles.titleCount}
            variants={headingVariants}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {countSection}
          </motion.span>
          Описание
        </motion.h2>
      
      <div 
      className={styles.containerDeadLine}
      > 
      <motion.div
        variants={svgVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Icon name={IconName.MadeByTools} />
      </motion.div>

      <motion.ul
        className={styles.deadlineList}
        variants={containerVariants}
      >
        {deadlineList.map((item, index) => (
          <motion.li
            key={index} 
            className={styles.deadlineItem}
            variants={itemVariants}
          >
            <p className={styles.deadlineItemTitle}>
              {item.title}
              <span className={styles.deadlineItemSubtitle}>{item.subtitle}</span>
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
    </div>

    {imgPath && (
      <motion.div
        className={styles.containerImg}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image alt="img" layout="fixed" className={styles.img} width={768} height={480} src={imgPath} />
      </motion.div>
    )}

    {imagesCarusel && (
      <div
        className={styles.carusel}
      >
        <Carusel images={imagesCarusel} />
      </div>
    )}
  </section>
);
}