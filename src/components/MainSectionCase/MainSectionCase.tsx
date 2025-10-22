"use client"

import style from "./styles.module.scss"
import Image from "next/image"
import { Icon } from "@/shared/assets/icons/icons"
import { IconName } from "@/shared/assets/icons/types"
import { CaseBack } from "@/widgets/CaseBack/CaseBack"

export const MainSectionCase = ({title, descp, variant, imgLink}: {title: string, descp: string, variant?: "serebr", imgLink: string}) => {

  const onClickButton = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return <section id="main" data-title="Главная" className={style.section}>
      <CaseBack imgLink={imgLink}/>
      <div className={`${style.content__wrapper} ${variant ? style[variant]: ""}`}>
        <div className={style.image__block}>
          <p className={style.stroke__one}>{title}</p>
          <Image
            className={`${style.img__figures} ${variant ? style[variant]: ""}`}
            src="/img/figures.webp"
            alt="figures"
            width={300}
            height={380}
          />
        </div>
        <div className={`${style.text__block} ${variant ? style[variant]: ""}`}>
          <p className={`${style.text} ${variant ? style[variant]: ""}`}>
            {descp}
          </p>
          <div
            className={`${style.buttons__wrapper} ${variant ? style[variant]: ""}`}>
            <button
              onClick={() => onClickButton('contacts')}
              className={style.button__case}>
              Заказать проект 
              <Icon color="currentColor" className={style.buttonCaseSvg} name={IconName.ArrowUp} />
            </button>
            <Icon className={style.vector} color="#007aff" name={IconName.Figure} />
          </div>
        </div>
      </div>
    </section>
}