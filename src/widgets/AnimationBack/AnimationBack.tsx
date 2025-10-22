"use client"

import { TypeAnimation } from "react-type-animation"
import style from "./styles.module.scss"
import { Icon } from "@/shared/assets/icons/icons"
import { IconName } from "@/shared/assets/icons/types"

export const AnimationBack = () => {
  return <div className={style.container}>
    <Icon className={style.image_bg} name={IconName.MainBG} />
    <h1 className={style.title}>
      <span>Для</span>
      <TypeAnimation
        className={style.title}
        sequence={[
          'бизнеса',
          1500,
          'стартапов',
          1500,
          'роста',
          1500,
          'Государства',
          1500,
          'идей',
          1500,
        ]}
        speed={10}
        repeat={Infinity}
        cursor={true}
      />
    </h1>
  </div>
}