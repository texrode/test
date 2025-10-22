"use client";

import { Btn } from "@/shared/uikit";
import styles from "./styles.module.scss";
import { useState } from "react";
import { blocks, img, tabs, text } from "./data";

export const SpheresSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "tg" | "app" | "web" | "erp" | "out"
  >("tg");

  const activeText = text.find((item) => item.id === activeTab);
  const activeBlocks = blocks.find((item) => item.id === activeTab);
  const activeImg = img.find((item) => item.id === activeTab);

  return (
    <section className={styles.section} id="services">
      <div className={styles.top}>
        <h2 className={styles.title}>Services</h2>
        <div className={styles.buttons_block}>
          {tabs.map((item) => (
            <button
              key={item.id}
              className={`${styles.btn} ${
                activeTab === item.id && styles.active_btn
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.btn}
            </button>
          ))}
        </div>

        {activeText && (
          <div className={styles.main_block}>
            <h2 className={styles.title}>{activeText.title}</h2>
            <div className={styles.subtitle_block}>
              <p className={styles.subtitle}>{activeText.subtitle}</p>
              {activeText.subtitle2 && (
                <p className={styles.subtitle}>{activeText.subtitle2}</p>
              )}
            </div>
            <Btn text="Связаться" />
          </div>
        )}
      </div>

      {activeBlocks && (
        <div className={styles.bottom_block}>
          {activeBlocks.content.map((block, index) => (
            <div key={index} className={styles.info_block}>
              <p className={styles.title}>{block.title}</p>
              <p className={styles.subtitle}>{block.subtitle}</p>
            </div>
          ))}
        </div>
      )}

      {activeImg && (
        <img
          src={activeImg.src}
          alt="Фото"
          className={`${styles.img} ${styles[activeImg.id]}`}
        />
      )}
    </section>
  );
};
