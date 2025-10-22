import { Icon } from "@/shared/assets/icons/icons";
import styles from "./styles.module.scss";
import { IconName } from "@/shared/assets/icons/types";
import { Button } from "@/shared/uikit/Button/Button";
import Link from "next/link";

export const InviteWidget = () => {
  return (
    <div className={styles.invite}>
      <div className={styles.left}>
        <Icon name={IconName.Logo} size={62} className={styles.logo} />
        <p className={styles.inviteTilte}>Присоединяйтесь к Tools!</p>
        <p className={styles.subtitle}>
          Обсуждайте и предлагайте идеи, задавайте вопросы и участвуйте в
          мероприятиях с единомышленниками.
        </p>
      </div>
      <Link href="https://t.me/toolsdev_work">
        <Button className={styles.btn}>
          <Icon name={IconName.Tg} className={styles.tg} color="white" />
          Telegram канал
        </Button>
      </Link>

      <img
        src="https://t-card-app.hb.ru-msk.vkcloud-storage.ru/frontend/gifs/hi.webp"
        alt="gif"
        className={styles.gif}
      />
    </div>
  );
};
