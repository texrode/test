import React from "react";
import styles from "./page.module.scss";
import { FlyingBall } from "@/shared/uikit/FlyingBall/FlyingBall";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "../shared/utils/index.scss";
import CookieConsent from "@/widgets/CookieConsent/CookieConsent";

export const metadata = {
  title:
    "Tools — Разработка для бизнеса, создание приложений, ПО и высоконагруженных систем",
  description:
    "Создаем технологичные, социально значимые цифровые сервисы и экосистемы в любой точке мира. Мобильные и веб-приложения, ERP-системы и TelegramApp под ключ. Помогаем бизнесу автоматизировать процессы, ускорить рост и снизить затраты. Надежная разработка и гибкий подход.",
  keywords: [
    "разработка ПО",
    "создание мобильных приложений",
    "веб-разработка",
    "ERP системы",
    "CRM разработка",
    "Telegram боты",
    "высоконагруженные системы",
    "аутстафф разработчиков",
    "IT аутсорсинг",
    "разработка под ключ",
  ].join(", "),
  authors: [{ name: "Tools Development Team", url: "https://toolsdev.org" }],
  creator: "Tools Dev",
  publisher: "Tools Development Company",
  openGraph: {
    title: "Tools — Разработка программного обеспечения",
    description:
      "Разработка програмного обеспечения, web сервисов, разработка мобильных приложений, высоконагруженных систем, индивидуальная разработка под требования. Аутстаф и поддержка ваших продуктовых команд.",
    url: "https://toolsdev.org",
    images: [
      {
        url: "https://tools-website.hb.ru-msk.vkcloud-storage.ru/SEO%20%D0%A1%D0%BE%D1%86%D0%B5%D1%82%D0%B8.png",
        width: 1200,
        height: 630,
        alt: "Tools Development - создание IT-решений для бизнеса",
      },
    ],
    type: "website",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Tools — Разработка для бизнеса, создание приложений, ПО и
          высоконагруженных систем
        </title>
        {/* Favicon */}
        <meta name="apple-mobile-web-app-title" content="Tools Dev" />
        <link rel="manifest" href="/manifest.json" />
        {/* Гугл Метрика */}
        <GoogleTagManager gtmId="GTM-MMFK9S9D" />
        <GoogleAnalytics gaId="G-2MCSHQ7S2L" />
        {/* Яндекс Метрика */}
        <script type="text/javascript">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){
            (m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            a=e.createElement(t);
            k=e.getElementsByTagName(t)[0];
            a.async=1;a.src=r;k.parentNode.insertBefore(a,k)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(98098905, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </script>
      </head>
      <body>
        {/* <FlyingBall /> */}
        <main className={styles.main}>{children}</main>
        <CookieConsent />
      </body>
    </html>
  );
}
