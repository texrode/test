"use client";

import { Icon } from "@/shared/assets/icons/icons";
import styles from "./styles.module.scss";
import { IconName } from "@/shared/assets/icons/types";
import Link from "next/link";

const links = [
  {
    label: "Telegram",
    href: "https://t.me/toolsdev_work",
    text: "@toolsdev_work",
  },
  {
    label: "Phone",
    text: "+7 922 366-56-36",
    href: "tel:+79223665636",
  },
  {
    label: "Email",
    text: "work@toolsdev.org",
    href: "mailto:work@toolsdev.org",
  },
  {
    label: "Workspace",
    text: "Tools",
    href: "https://workspace.ru/contractors/tools/",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Icon name={IconName.ToolsNew} className={styles.svg} />
      <div className={styles.links}>
        {links.map((item, index) => (
          <div className={styles.link_block} key={index}>
            <label className={styles.label}>{item.label}</label>
            <Link href={item.href} className={styles.link}>
              <span className={styles.s1}>{item.text}</span>
              <span className={styles.s2}>{item.text}</span>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.policy}>
        <Link href={"/policy"} className={styles.policy_link}>
          <span className={styles.s1}>Политика конфиденциальности</span>
          <span className={styles.s2}>Политика конфиденциальности</span>
        </Link>

        <Link href={"/policy"} className={styles.policy_link}>
          <span className={styles.s1}>
            Политика обработки персональных данных
          </span>
          <span className={styles.s2}>
            Политика обработки персональных данных
          </span>
        </Link>
      </div>
    </footer>
  );
};
