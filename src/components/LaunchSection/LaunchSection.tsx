"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import { Button } from "@/shared/uikit/Button/Button"
import { Icon } from "@/shared/assets/icons/icons"
import { IconName } from "@/shared/assets/icons/types"
import { ReactNode } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/shared/uikit/AnimatedSection/AnimatedSection"
import useWindowSize from "@/shared/hooks/useWindowSize"

export const LaunchSection = ({imgPath, countSection, hrefMain, children}: {imgPath?: string, countSection: string, hrefMain: {link: string, title: string}, children: ReactNode}) => {
  const windowSize = useWindowSize()

  return <AnimatedSection>
    <section id="launch" data-title="Запуск" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleCount}>{countSection}</span>
          Запуск
        </h2>
        <p className={styles.descp}>{children}</p>
        {(windowSize < 1024 && imgPath) && <Image className={styles.img} width={259} height={259} src={imgPath} alt="T-Card-Qr"/>}
        <div className={styles.buttons}>
          <Link href={hrefMain.link}>
            <Button className={styles.btn}>
              <Icon name={IconName.Tg} className={styles.tg} color="white" />
              {hrefMain.title}
            </Button>
          </Link>
          {windowSize < 1024 && <Link href="https://t.me/TCard_Job_bot/webapp">
            <Button className={`${styles.btn} ${styles.secondary}`}>
              Запустить
            </Button>
          </Link>}
        </div>
      </div>
      {(windowSize > 1024 && imgPath) && <Image className={styles.img} width={259} height={259} src={imgPath} alt="T-Card-Qr"/>}
    </section>
  </AnimatedSection> 
}