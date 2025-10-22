"use client";

import style from "./styles.module.scss";
import { TabBar } from "@/widgets";
import Link from "next/link";
import { Btn } from "@/shared/uikit";
import { useScrollOrNavigate } from "@/shared/hooks/useScrollOrNavigate";

export const MainSection = ({
  text = (
    <>
      WE
      <br />
      ARE
      <br />
      TOOLS
    </>
  ),
  subBlock = true,
}: {
  text?: React.ReactNode;
  subBlock?: boolean;
}) => {
  const handleSectionClick = useScrollOrNavigate();

  return (
    <section id="main" data-title="Главная" className={style.section}>
      <video
        className={style.bgVideo}
        src="/videos/vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <TabBar />

      <div className={style.bottom}>
        <div className={style.left}>
          {subBlock && <p className={style.hello}>Hello</p>}

          <p className={style.we}>{text}</p>
        </div>
        {subBlock && (
          <div className={style.right}>
            <p className={style.info}>
              Разрабатываем сервисы и информационные системы, сопровождаем ПО,
              внедряем корпоративные решения и формируем
              выделенную аутстаф-команду под управление заказчика.
            </p>
            <Btn
              text="Обсудить проект"
              onClick={() => handleSectionClick("contactus")}
            />
          </div>
        )}
      </div>
    </section>
  );
};
