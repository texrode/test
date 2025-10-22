import styles from "./styles.module.scss";

interface NewsItemProps {
  img: string;
  title: string;
  subtitle: string;
}

export const NewsItem = ({ img, title, subtitle }: NewsItemProps) => {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={img} alt="Фото" />
      <div className={styles.text_block}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
