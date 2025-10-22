"use client";

import { Btn } from "@/shared/uikit";
import styles from "./styles.module.scss";
import { news } from "./data";
import { NewsItem } from "@/entities";

export const NewsSection: React.FC = () => {
  return (
    <section className={styles.section} id="news">
      <div className={styles.title__block}>
        <p className={styles.title_text}>News</p>
        <div className={styles.subtitle_block}>
          <h2 className={styles.subtitle_title}>Новости компании</h2>
          <p className={styles.subtitle}>
            Будьте в курсе последних событий: от запуска новых проектов и
            успехов нашей команды до экспертных статей и участия в ключевых
            отраслевых мероприятиях.
          </p>
          <Btn text="Все проекты" />
        </div>
      </div>

      <div className={styles.news_block}>
        {news.map((item, index) => (
          <NewsItem {...item} key={index} />
        ))}
      </div>
    </section>
  );
};
