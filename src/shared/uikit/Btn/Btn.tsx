import styles from "./style.module.scss";

interface BtnProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Btn = ({ text, className, onClick }: BtnProps) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.btn}`}>
      <p className={styles.text}>
        <span className={styles.s1}>{text}</span>
        <span className={styles.s2}>{text}</span>
      </p>
    </button>
  );
};
