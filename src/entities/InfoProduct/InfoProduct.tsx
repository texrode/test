import styles from './styles.module.scss'

type InfoProductProps = {
  svg: (color?: string) => React.ReactNode;
  title: string;
  text: string;
};

export const InfoProduct: React.FC<InfoProductProps> = ({ svg, title, text }) => {
  return <div className={styles.info}>
    <div className={styles.svg__wrapper}>{svg()}</div>
    <p className={styles.title}>{title}</p>
    <p className={styles.text}>{text}</p>
  </div>;
};
