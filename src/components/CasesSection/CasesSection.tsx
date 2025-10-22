import { Btn } from "@/shared/uikit";
import { CASES } from "./cases.data";
import styles from "./styles.module.scss";
import { Case } from "@/entities";
import Link from "next/link";

export const CasesSection = ({ subBlock = true }: { subBlock?: boolean }) => {
  return (
    <section className={styles.section} data-title="Кейсы" id="cases">
      <div className={styles.title__block}>
        <p className={styles.title_text}>Cases</p>
        {subBlock && (
          <div className={styles.subtitle_block}>
            <h2 className={styles.subtitle_title}>Наши кейсы</h2>
            <p className={styles.subtitle}>
              Простое управление данными для сложных решений
              <br />
              Стандартизируйте, ускоряйте и защищайте работу с данными на любой
              платформе.
            </p>
            <Link href="/cases">
              <Btn text="Все проекты" />
            </Link>
          </div>
        )}
      </div>

      <div className={styles.content}>
        {CASES.map((item, index) => (
          <Case
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            category={item.category}
            href={item.href}
            zoom={item.zoom}
            noZoom={item.noZoom}
          />
        ))}
      </div>
    </section>
  );
};
