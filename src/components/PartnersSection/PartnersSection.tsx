"use client";

import { IconName } from "@/shared/assets/icons/types";
import styles from "./styles.module.scss";
import { Icon } from "@/shared/assets/icons/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const PartnersSection: React.FC = () => {
  const products = [
    {
      logo: <Icon name={IconName.TMobile} className={styles.icon} />,
      title: "T - Mobile",
      year: "2023",
      link: "https://www.t-mobile.com/",
    },
    // {
    //   logo: <Icon name={IconName.Sereb} className={styles.icon} />,
    //   title: 'Серебренников',
    //   year: '2024',
    //   link: 'https://serebrennikov.site/',
    // },
    {
      logo: <Icon name={IconName.TCard} className={styles.icon} />,
      title: "T - Card",
      year: "2025",
      link: "https://t.me/TCard_Job_bot/app",
    },
    // {
    //   logo: <Icon name={IconName.GutenTag} className={styles.icon} />,
    //   title: 'Guten Tag',
    //   year: '2025',
    //   link: 'https://medgut.ru/',
    // },
    {
      logo: <Icon name={IconName.PromoBot} className={styles.icon} />,
      title: "PromoBot",
      year: "2025",
      link: "https://promo-bot.ru/",
    },
    {
      logo: <Icon name={IconName.Perm} className={styles.icon} />,
      title: "Perm",
      year: "2025",
      link: "https://mtm.permkrai.ru/",
    },
    {
      logo: <Icon name={IconName.Perm2} className={styles.icon} />,
      title: "Perm2",
      year: "2025",
      link: "https://www.gorodperm.ru/",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const container = containerRef.current;
    let scrollAmount = 0;
    const speed = 1;
    let animationFrame: number;

    const scroll = () => {
      if (!container) return;
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <section
      id="partners"
      data-title="Партнеры"
      className={styles.section}
      ref={sectionRef}
    >
      <p className={styles.title}>Partners</p>

      <div className={styles.partners} ref={containerRef}>
        {products.concat(products).map((item, index) => (
          <Link href={item.link} key={index} className={styles.product}>
            {item.logo}
          </Link>
        ))}
      </div>
    </section>
  );
};
