import styles from "./styles.module.scss";
import React from "react";
import Link from "next/link";

interface CaseProps {
  img: string;
  title?: string;
  description?: string;
  category?: string[];
  href: string;
  zoom?: boolean;
  noZoom?: boolean;
}

export const Case = ({
  img,
  title,
  description,
  category,
  href,
  zoom = false,
  noZoom = false,
}: CaseProps) => {
  return (
    <Link href={href} className={styles.case}>
      <div className={styles.case__container}>
        <div className={styles.category_wrapper}>
          {category?.map((item, index) => (
            <div key={index} className={styles.category}>
              <p className={styles.category_text}>{item}</p>
            </div>
          ))}
        </div>
        <img
          className={`${styles.img} ${zoom && styles.zoom} ${noZoom && styles.noZoom}`}
          src={img}
          alt="case"
        />
      </div>

      <div className={styles.title__block}>
        <p className={styles.title}>{title}</p>

        <p className={styles.subtitle}>{description}</p>
      </div>
    </Link>
  );
};
