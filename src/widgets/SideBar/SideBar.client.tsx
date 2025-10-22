'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../shared/assets/icons/icons';
import styles from './styles.module.scss';
import { IconName } from '@/shared/assets/icons/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Tab {
  text: string;
  id: string;
}

const mainTabs = [
  { text: 'Главная', id: 'main' },
  { text: 'Новости', id: 'news' },
  { text: 'Партнеры', id: 'partners' },
  { text: 'Кейсы', id: 'cases' },
  { text: 'Сферы', id: 'spheres' },
  { text: 'Контакты', id: 'contacts' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tabs, setTabs] = useState<Tab[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setTabs(mainTabs);
      return;
    }

    const sectionElements = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];

    const generatedTabs = sectionElements.map((section) => ({
      id: section.id,
      text: section.dataset.title || section.id,
    }));

    setTabs(generatedTabs);

    const observerInstance = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible?.target.id) setActiveTab(visible.target.id);
      },
      { threshold: 0.25 },
    );

    observer.current = observerInstance;

    sectionElements.forEach((el) => {
      observerInstance.observe(el);
    });

    return () => {
      setActiveTab(null);
      observerInstance.disconnect();
    };
  }, [pathname]);

  return (
    <div className={`${styles.sideBar} ${isOpen && styles.openBar}`}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link href="/">
            <Icon name={IconName.Tools} className={styles.tools} />
          </Link>

          <p className={styles.open} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Закрыть' : 'Меню'}
          </p>
        </div>

        <motion.nav
          className={styles.tabs}
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {tabs.map((tab, index) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={index}
              href={`/#${tab.id}`}
              scroll={true}
              passHref>
              <motion.div
                className={styles.tab}
                variants={tabVariants}
                style={{ cursor: 'pointer' }}>
                <p className={`${styles.text} ${activeTab === tab.id ? styles.blue : ''}`}>
                  {tab.text}
                </p>
                <p className={styles.index}>{`0${index}`}</p>
              </motion.div>
            </Link>
          ))}
        </motion.nav>

        <div className={styles.contacts}>
          <p className={styles.contactUs}>Связаться с нами</p>
          <div className={styles.links}>
            <a href="#">
              <Icon name={IconName.Figma} className={styles.figma} />
            </a>
            <a href="https://t.me/toolsdev_work">
              <Icon name={IconName.Tg} className={styles.tg} />
            </a>
            <a
              href="https://perm.flamp.ru/firm/tools_it_kompaniya-70000001102451942"
              target="_blank">
              <Image src="/img/flamp.jpg" alt="flamp" width={30} height={30} />
            </a>
          </div>
          <a href="https://workspace.ru/contractors/tools/">
            <Icon name={IconName.WorkSpace} className={styles.workspace} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <Icon name={IconName.QuotesUp} className={styles.fat} />
        <p className={styles.description}>
          Разработка начинается тогда, когда просто «идея» уже недостаточно.
          <br />
          <span className={styles.fat}>Мы в этом поможем</span>
        </p>
      </div>
    </div>
  );
};
