"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Btn } from "@/shared/uikit";
import { useState } from "react";
import { Icon } from "@/shared/assets/icons/icons";
import { IconName } from "@/shared/assets/icons/types";
import { links, linksMobile, sections, sectionsMobile } from "./data";
import { useScrollOrNavigate } from "@/shared/hooks/useScrollOrNavigate";

export const TabBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<"RU" | "ENG">("RU");

  const lang: ("RU" | "ENG")[] = ["RU", "ENG"];

  const handleSectionClick = useScrollOrNavigate();
  return (
    <>
      <div className={styles.tabbar}>
        <div className={styles.links}>
          {links.map((item, index) => (
            <Link href={item.href} key={index} className={styles.link}>
              <span className={styles.s1}>{item.text}</span>
              <span className={styles.s2}>{item.text}</span>
            </Link>
          ))}
        </div>
        <div className={styles.sections}>
          {sections.map((item, index) => (
            <button
              key={index}
              className={styles.section}
              onClick={() => handleSectionClick(item.id)}
            >
              <span className={styles.s1}>{item.text}</span>
              <span className={styles.s2}>{item.text}</span>
            </button>
          ))}
          <Btn
            text="Связаться"
            onClick={() => handleSectionClick("contactus")}
          />
          <div className={styles.language}>
            {lang.map((item, index) => (
              <button
                className={`${styles.language_button} ${
                  activeLang !== item && styles.language_buttonGray
                }`}
                key={index}
                onClick={() => setActiveLang(item)}
              >
                <span className={styles.s1}>{item}</span>
                <span className={styles.s2}>{item}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tabbarMobile}>
        <div className={styles.top}>
          <Btn
            text="Связаться"
            onClick={() => handleSectionClick("contactus")}
          />

          <button className={styles.burger} onClick={() => setIsOpen(true)}>
            <Icon name={IconName.BurgerMenu} />
          </button>
        </div>

        <div className={`${styles.menu} ${isOpen && styles.open}`}>
          <button
            className={styles.burger_menu}
            onClick={() => setIsOpen(false)}
          >
            <Icon name={IconName.Close} />
          </button>

          <video
            className={styles.bgVideo}
            src="/videos/vid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className={styles.sections}>
            <p className={styles.title}>Menu</p>
            {sectionsMobile.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleSectionClick(item.id);
                  setIsOpen(false);
                }}
                className={styles.mobileSection}
              >
                {item.text}
              </button>
            ))}
          </div>

          <div className={styles.links_block}>
            {linksMobile.map((item, index) => (
              <div key={index} className={styles.link_mobile}>
                <label className={styles.link_label}>{item.text}</label>
                <Link
                  href={item.href}
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className={styles.link_href}
                >
                  {item.href}
                </Link>
              </div>
            ))}
          </div>

          <Btn
            text="Обсудить проект"
            onClick={() => handleSectionClick("contactus")}
          />
        </div>
      </div>
    </>
  );
};
