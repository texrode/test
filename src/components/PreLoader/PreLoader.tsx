"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { IconName } from "@/shared/assets/icons/types";
import { Icon } from "@/shared/assets/icons/icons";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const target = isDone ? 100 : 90;
        if (prev < target) {
          return prev + 1;
        } else {
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [isDone]);

  useEffect(() => {
    const handleLoad = () => {
      setIsDone(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.overlay} ${progress === 100 && styles.hidden}`}>
      <Icon name={IconName.Tools} className={styles.tools} />
      <div className={styles.bottom}>
        <Icon name={IconName.QuotesUp} className={styles.fat} />
        <p className={styles.description}>
          Разработка начинается тогда, когда просто «идея» уже недостаточно.
          <br />
          <span className={styles.fat}>Мы в этом поможем</span>
        </p>
      </div>
      <p className={styles.progress}>{progress}%</p>
    </div>
  );
};
