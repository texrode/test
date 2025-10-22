"use client";

import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { Btn } from "@/shared/uikit";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.container}>
        <p className={styles.text}>
          Продолжая пользование настоящим сайтом Вы выражаете своё согласие на
          обработку Ваших персональных данных (файлов cookie) с использованием
          трекеров "Yandex.Metrics". Порядок обработки Ваших персональных
          данных, а также реализуемые требования к их защите, содержатся в{" "}
          <Link href="/policy" className={styles.link}>
            политике по обработке персональных данных.
          </Link>
        </p>
        <Btn text="Принять" onClick={acceptCookies} />
      </div>
    </motion.div>
  );
}
