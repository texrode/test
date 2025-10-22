"use client"

import { AnimatedSection } from "@/shared/uikit/AnimatedSection/AnimatedSection"
import styles from "./styles.module.scss"
import Image from "next/image"
import { motion } from "framer-motion"

interface Person {
  img: string,
  name: string,
  role: string
}

interface ITeamSection {
  team: Person[],
  stack: string[],
  countSection: string
}

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

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export const TeamSection = ({team, stack, countSection}: ITeamSection) => {
  return <AnimatedSection>
  <section id="team" data-title="Команда" className={styles.section}>
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
        Команда
      </motion.h2>
      <motion.div
        className={styles.team}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {team.map((item, index) => (
          <motion.div key={index} className={styles.person} variants={itemVariants}>
            <Image
              className={styles.personImg}
              width={79}
              height={79}
              alt={"person" + item.name}
              src={item.img}
            />
            <div className={styles.personDescp}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <motion.div
        className={styles.stack}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 className={styles.stackTitle} variants={titleVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
          02 <span className={styles.specialText}>Стек технологий</span>
        </motion.h2>

        <motion.ul className={styles.stackList} variants={containerVariants}>
          {stack.map((item, index) => (
            <motion.li key={index} className={styles.stackItem} variants={itemVariants}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
  </section>
  </AnimatedSection>
}