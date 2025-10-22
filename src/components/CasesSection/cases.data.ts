import {
  guten_tag,
  runningClub,
  sereb,
  t_card,
  t_mobile,
  testPapas,
  ujin,
} from "./svg.data";

export const MOBILE_CASES = [
  {
    img: "/img/cases-back/tcardBackSecondary.webp",
    title: "Новая эра трудоустройства",
    date: "04 Май, 2024",
    description: "Первое приложение для поиска работы в Telegram",
    category: ["Дизайн", "Разработка", "Внедрение"],
    svg: t_card(),
    href: "/case/T-Card",
  },
  // {
  //   img: '/img/cases-back/serebrBackSec.webp',
  //   date: '12 Апрель, 2025',
  //   description: 'Приложение для стоматологии с внедрением реферально',
  //   description2: 'реферально - бонусной системы',
  //   category: ['Дизайн', 'Разработка', 'Внедрение'],
  //   svg: sereb(),
  //   href: "/case/Serebrennikov"
  // },
  {
    img: "/img/cases-back/ujinBackSec.webp",
    date: "14 Октябрь, 2024",
    description: "Мобильное приложение для ЖК под управлением ",
    description2: "экосистемы UJIN c выдачей пропусков и Алисой",
    category: ["Разработка"],
    svg: ujin(),
    href: "/case/Ujin",
  },
  // {
  //   img: '/img/cases-back/gutenTagBackSec.webp',
  //   date: '14 Октябрь, 2024',
  //   description: 'Приложение для премиальной сети',
  //   description2: 'стоматологий в Перми',
  //   category: ['Дизайн', 'Разработка', 'Внедрение'],
  //   svg: guten_tag(),
  //   href: "/case/GutenTag"
  // },
  {
    img: "/img/cases-back/runningClubSec.webp",
    date: "12 Апрель, 2025",
    description: "Приложение - Бот для Бегового Сообщества.",
    description2: "Анализ .fit файлов прямо в телефоне",
    category: ["Дизайн", "Разработка", "Внедрение"],
    svg: runningClub(),
    href: "/case/108RunningClub",
  },
  {
    img: "/img/cases-back/tmobileBack.webp",
    title: "Prepaid Esim",
    date: "27 Декабрь, 2023",
    description: "Разработка модуля получения SIM в мобильном приложении",
    category: ["Разработка"],
    svg: t_mobile(),
    href: "",
  },
];

export const SERVER_CASES = [
  {
    img: "/img/pafos/pafosCase.webp",
    date: "12 Сентябрь, 2025",
    description: "",
    title: "PAFOS",
    href: "/case/Pafos",
    subtitle:
      "Система защиты продукции от подделки, управляемая административной панелью",
    category: ["Разработка", "Внедрение"],
  },
];

export const WEB_SITE_CASES = [
  {
    img: "/img/cases-back/testPapas.webp",
    date: "6 Июль, 2025",
    description: "",
    svg: testPapas(),
    href: "/case/TestPapos",
    subtitle:
      "Система защиты продукции от подделки, управляемая административной панелью",
    category: ["Разработка", "Внедрение"],
  },
];

export const DESKTOP_CASES = [
  {
    img: "/img/cases-phone/ноут.webp",
    title: "Приложение в разработке",
    date: "12 Сентябрь, 2025",
    description: "",
    category: ["Дизайн", "Разработка", "Внедрение"],
  },
];

export const CASES = [
  {
    img: "/img/cases-back/tCardBackSecondary.webp",
    title: "Новая эра трудоустройства",
    description: "Первое приложение для поиска работы в Telegram",
    category: ["Дизайн", "Разработка", "Внедрение"],
    href: "/case/T-Card",
  },
  // {
  //   img: '/img/cases-back/serebrBackSec.webp',
  //   title: 'Приложение для стоматологии',
  //   description: 'с внедрением реферально - бонусной системы',
  //   category: ['Дизайн', 'Разработка', 'Внедрение'],
  //   href: "/case/Serebrennikov"
  // },
  {
    img: "/img/cases-back/ujinBackSec.webp",
    title: "Мобильное приложение для ЖК",
    description: "под управлением экосистемы UJIN c выдачей пропусков и Алисой",
    category: ["Разработка"],
    href: "/case/Ujin",
    zoom: true,
  },
  // {
  //   img: '/img/cases-back/gutenTagBackSec.webp',
  //   title: 'Приложение для премиальной сети',
  //   description2: 'стоматологий в Перми',
  //   category: ['Дизайн', 'Разработка', 'Внедрение'],
  //   href: "/case/GutenTag"
  // },
  {
    img: "/img/cases-back/runningClubSec.webp",
    title: "Приложение - Бот для Бегового Сообщества.",
    description: "Анализ .fit файлов прямо в телефоне",
    category: ["Дизайн", "Разработка", "Внедрение"],
    href: "/case/108RunningClub",
    zoom: true,
  },
  {
    img: "/img/cases-back/tmobileBack.webp",
    title: "Prepaid Esim",
    description: "Разработка модуля получения SIM в мобильном приложении",
    category: ["Разработка"],
    href: "",
    zoom: true,
  },
  {
    img: "/img/pafos/pafosCase.webp",
    title: "PAFOS",
    href: "/case/Pafos",
    description:
      "Система защиты продукции от подделки, управляемая административной панелью",
    category: ["Разработка", "Внедрение"],
    noZoom: true
  },
  {
    img: "/img/cases-back/testPapas.webp",
    description:
      "Система защиты продукции от подделки, управляемая административной панелью",
    href: "/case/TestPapos",
    title: "TestPapas",
    category: ["Разработка", "Внедрение"],
    noZoom: true
  },
  {
    img: "/img/cases-phone/ноут.webp",
    title: "Приложение в разработке",
    description: "",
    category: ["Дизайн", "Разработка", "Внедрение"],
    href: "",
    noZoom: true
  },
];
