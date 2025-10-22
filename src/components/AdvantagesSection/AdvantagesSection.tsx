"use client";

import { Advantages } from "@/entities";
import { advantages } from "./data";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

export const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const animateScroll = () => {
      if (!sectionRef.current || !advantagesRef.current) return;

      const section = sectionRef.current;
      const advantagesContainer = advantagesRef.current;
      const rect = section.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;

        const progress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - rect.top) / (sectionHeight + windowHeight)
          )
        );

        const scrollWidth =
          advantagesContainer.scrollWidth - advantagesContainer.clientWidth;
        advantagesContainer.scrollLeft = progress * scrollWidth;
      }

      animationFrameRef.current = requestAnimationFrame(animateScroll);
    };

    animationFrameRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <video
        className={styles.bgVideo}
        src="/videos/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <p className={styles.title}>Advantages</p>

      <div className={styles.advantages} ref={advantagesRef}>
        {advantages.map((item, index) => (
          <Advantages {...item} key={index} />
        ))}
      </div>

      <div className={styles.bottom}>
        <p className={styles.text}>
          Разработка начинается тогда, когда просто «идея» уже недостаточно.
          Мы в этом поможем
        </p>
        <div className={styles.block}>
          <span className={styles.border}>
            <span className={styles.circle}></span>
          </span>
          <span className={styles.line}></span>
        </div>
      </div>
    </section>
  );
};
